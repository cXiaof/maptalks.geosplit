import { Point2D, Intersection } from 'kld-intersections'
import isEqual from 'lodash/isEqual'
import unionWith from 'lodash/unionWith'
import flattenDeep from 'lodash/flattenDeep'

const options = {}

export class GeoSplit extends maptalks.Class {
    constructor(options) {
        super(options)
        this._layerName = `${maptalks.INTERNAL_LAYER_PREFIX}_CDSP`
        this._layerTMP = `${maptalks.INTERNAL_LAYER_PREFIX}_CDSP_TMP`
        this._chooseGeos = []
        this._colorHit = '#ffa400'
        this._colorChoose = '#00bcd4'
    }

    split(geometry, targets) {
        if (geometry instanceof maptalks.Polygon || geometry instanceof maptalks.LineString) {
            this._initialTaskWithGeo(geometry)
            if (targets instanceof maptalks.LineString) targets = [targets]
            if (targets instanceof Array && targets.length > 0) {
                this._splitWithTargets(targets)
                this.remove()
            }
            return this
        }
    }

    submit(callback = () => false) {
        this._splitWithTargets()
        callback(this._result, this._deals)
        this.remove()
    }

    cancel() {
        this.remove()
    }

    remove() {
        const map = this._map
        if (this._tmpLayer) this._tmpLayer.remove()
        if (this._chooseLayer) this._chooseLayer.remove()
        this._chooseGeos = []
        this._offMapEvents()
        delete this._result
        delete this._deals
        delete this._tmpLayer
        delete this._chooseLayer
        delete this._mousemove
        delete this._click
        delete this._dblclick
    }

    _initialTaskWithGeo(geometry) {
        this._insureSafeTask()
        this._savePrivateGeometry(geometry)
    }

    _insureSafeTask() {
        if (map._map_tool && drawTool instanceof maptalks.DrawTool) drawTool.disable()
        if (this.geometry) this.remove()
    }

    _savePrivateGeometry(geometry) {
        this.geometry = geometry
        this.layer = geometry._layer
        if (geometry.type.startsWith('Multi')) this.layer = geometry._geometries[0]._layer
        this._addTo(this.layer.map)
    }

    _addTo(map) {
        if (this._chooseLayer) this.remove()
        this._map = map
        this._tmpLayer = new maptalks.VectorLayer(this._layerTMP).addTo(map).bringToFront()
        this._chooseLayer = new maptalks.VectorLayer(this._layerName).addTo(map).bringToFront()
        this._registerMapEvents()
        return this
    }

    _registerMapEvents() {
        if (!this._mousemove) {
            const map = this._map
            this._mousemove = (e) => this._mousemoveEvents(e)
            this._click = (e) => this._clickEvents(e)
            map.on('mousemove', this._mousemove, this)
            map.on('click', this._click, this)
        }
    }

    _offMapEvents() {
        if (this._mousemove) {
            const map = this._map
            map.off('mousemove', this._mousemove, this)
            map.off('click', this._click, this)
        }
    }

    _mousemoveEvents(e) {
        let geos = []
        const coordSplit = this._getSafeCoords()
        this.layer.identify(e.coordinate).forEach((geo) => {
            const coord = this._getSafeCoords(geo)
            if (!isEqual(coord, coordSplit) && geo instanceof maptalks.LineString) geos.push(geo)
        })
        this._updateHitGeo(geos)
    }

    _getSafeCoords(geo = this.geometry) {
        let coords = geo.getCoordinates()
        if (geo.options.numberOfShellPoints) {
            const { options } = geo
            const { numberOfShellPoints } = options
            options.numberOfShellPoints = 300
            geo.setOptions(options)
            coords = [geo.getShell()]
            options.numberOfShellPoints = numberOfShellPoints || 60
            geo.setOptions(options)
        }
        return coords
    }

    _updateHitGeo(geos) {
        const id = '_hit'
        if (this._needRefreshSymbol) {
            const hitGeoCopy = this._chooseLayer.getGeometryById(id)
            if (hitGeoCopy) {
                hitGeoCopy.remove()
                delete this.hitGeo
            }
            this._needRefreshSymbol = false
        }
        if (geos && geos.length > 0) {
            this._needRefreshSymbol = true
            this.hitGeo = geos[0]
            const hitSymbol = this._getSymbolOrDefault(this.hitGeo, 'Hit')
            this._copyGeoUpdateSymbol(this.hitGeo, hitSymbol).setId(id)
        }
    }

    _getSymbolOrDefault(geo, type) {
        let symbol = geo.getSymbol()
        const color = this[`_color${type}`]
        const lineWidth = 4
        if (symbol) {
            for (let key in symbol) {
                if (key.endsWith('Fill') || key.endsWith('Color')) symbol[key] = color
            }
            symbol.lineWidth = lineWidth
        } else symbol = { lineColor: color, lineWidth }
        return symbol
    }

    _copyGeoUpdateSymbol(geo, symbol) {
        return geo
            .copy()
            .updateSymbol(symbol)
            .addTo(this._chooseLayer)
    }

    _clickEvents(e) {
        if (this.hitGeo) {
            const coordHit = this._getSafeCoords(this.hitGeo)
            this._setChooseGeosExceptHit(coordHit)
            this._updateChooseGeos()
        }
    }

    _setChooseGeosExceptHit(coordHit, hasTmp) {
        let chooseNext = []
        this._chooseGeos.forEach((geo) => {
            const coord = this._getSafeCoords(geo)
            if (!isEqual(coordHit, coord)) chooseNext.push(geo)
        })
        if (!hasTmp && chooseNext.length === this._chooseGeos.length)
            this._chooseGeos.push(this.hitGeo)
        else this._chooseGeos = chooseNext
    }

    _updateChooseGeos() {
        const layer = this._chooseLayer
        layer.clear()
        this._chooseGeos.forEach((geo) => {
            const chooseSymbol = this._getSymbolOrDefault(geo, 'Choose')
            this._copyGeoUpdateSymbol(geo, chooseSymbol)
        })
    }

    _splitWithTargets(targets = this._chooseGeos) {
        this._deals = this.geometry.copy()
        if (this.geometry instanceof maptalks.Polygon) this._splitPolygonWithTargets(targets)
        if (this.geometry instanceof maptalks.LineString) this._splitLineWithTargets(targets)
    }

    _splitPolygonWithTargets(targets) {
        let result
        targets = this._getPolygonAvailTargets(targets)
        targets.forEach((target) => {
            if (result) {
                let results = []
                result.forEach((geo) => {
                    this.geometry = geo
                    results.push(...this._splitPolygonTargetBase(target))
                })
                result = results
            } else result = this._splitPolygonTargetBase(target)
            target.remove()
        })
        this._result = result
    }

    _getPolygonAvailTargets(targets) {
        let avails = []
        targets.forEach((target) => {
            avails.push(...this._getPolygonAvailTarget(target))
            target.remove()
        })
        return avails
    }

    _getPolygonAvailTarget(target) {
        let avail = []
        let avails = []
        let one = false
        const coords = this._getSafeCoords(target)
        for (let i = 0; i < coords.length; i++) {
            if (one) {
                avail = unionWith(avail, [coords[i]], isEqual)
                const lastStartInner = this.geometry.containsPoint(coords[i - 1])
                const lastEndOuter = !this.geometry.containsPoint(coords[i])
                if (lastStartInner && lastEndOuter) {
                    one = false
                    avail = unionWith(avail, [coords[i]], isEqual)
                    avails.push(avail)
                    avail = []
                    i--
                }
            } else {
                if (coords[i + 1]) {
                    const line = new maptalks.LineString([coords[i], coords[i + 1]])
                    const points = this._getPolygonPolylineIntersectPoints(line)
                    if (points.length > 0) {
                        const startOuter = !this.geometry.containsPoint(coords[i])
                        const endInner = this.geometry.containsPoint(coords[i + 1])
                        if (startOuter && endInner) {
                            one = true
                            avail = unionWith(avail, [coords[i]], isEqual)
                        } else avails.push([coords[i], coords[i + 1]])
                    }
                }
            }
        }
        let lines = []
        avails.forEach((line) => lines.push(new maptalks.LineString(line)))
        return lines
    }

    _getPolygonPolylineIntersectPoints(target) {
        const polygon = this._getPoint2dFromCoords(this.geometry)
        const polyline = this._getPoint2dFromCoords(target)
        const { points } = Intersection.intersectPolygonPolyline(polygon, polyline)
        return points
    }

    _splitPolygonTargetBase(target) {
        const points = this._getPolygonPolylineIntersectPoints(target)
        let result
        if (this._getSafeCoords(target).length === 2 || points.length === 2) {
            if (this._getSafeCoords(target).length === 2)
                result = this._splitWithTargetCommon(target)
            else if (points.length === 2) result = this._splitWithTargetMoreTwo(target)
        } else return [this.geometry]
        this.geometry.remove()
        return result
    }

    _splitWithTargetCommon(target) {
        const coords0 = this._getSafeCoords()[0]
        const polyline = this._getPoint2dFromCoords(target)
        let forward = true
        let main = []
        let child = []
        let children = []
        for (let i = 0; i < coords0.length - 1; i++) {
            const line = new maptalks.LineString([coords0[i], coords0[i + 1]])
            const polylineTmp = this._getPoint2dFromCoords(line)
            const { points } = Intersection.intersectPolylinePolyline(polyline, polylineTmp)
            const [ects] = this._getCoordsFromPoints(points)
            if (isEqual(coords0[i], ects) || points.length > 0) {
                if (forward) {
                    main.push(coords0[i], ects)
                    child.push(ects)
                } else {
                    main.push(ects)
                    child.push(coords0[i], ects)
                    children.push(child)
                    child = []
                }
                forward = !forward
            } else {
                if (forward) main.push(coords0[i])
                else child.push(coords0[i])
            }
        }
        let result = []
        const symbol = this.geometry.getSymbol()
        const properties = this.geometry.getProperties()
        let geo = new maptalks.Polygon(main, { symbol, properties }).addTo(this.layer)
        result.push(geo)
        children.forEach((childCoord) => {
            geo = new maptalks.Polygon(childCoord, { symbol, properties }).addTo(this.layer)
            result.push(geo)
        })
        return result
    }

    _getPoint2dFromCoords(geo) {
        const map = this._map
        const zoom = map.getZoom()
        const coords = this._getSafeCoords(geo)
        let points = []
        flattenDeep(coords).forEach((coord) => points.push(map.coordinateToPoint(coord, zoom)))
        return points
    }

    _getCoordsFromPoints(points) {
        if (!(points instanceof Array)) points = [points]
        const map = this._map
        const zoom = map.getZoom()
        let coords = []
        points.forEach((point2d) => coords.push(map.pointToCoordinate(point2d, zoom)))
        return coords
    }

    _splitWithTargetMoreTwo(target) {
        const coords0 = this._getSafeCoords()[0]
        const polyline = this._getPoint2dFromCoords(target)
        let forward = true
        let main = []
        let child = []
        let gap = []
        for (let i = 0; i < coords0.length - 1; i++) {
            const line = new maptalks.LineString([coords0[i], coords0[i + 1]])
            const polylineTmp = this._getPoint2dFromCoords(line)
            const { points } = Intersection.intersectPolylinePolyline(polyline, polylineTmp)
            const ects = this._getCoordsFromPoints(points)
            const [ect] = ects
            if (isEqual(coords0[i], ect) || points.length > 0) {
                if (forward) main.push(coords0[i], ect)
                else main.push(ect)
                if (gap.length === 0) {
                    gap = this._getTargetGap(target, points[0])
                    if (gap.length > 0) {
                        main.push(...gap)
                        child.push(...gap.reverse())
                    }
                }
                if (forward) child.push(ect)
                else child.push(coords0[i], ect)
                if (ects.length > 1) {
                    main.push(ects[1])
                    child.push(ects[1])
                } else forward = !forward
            } else {
                if (forward) main.push(coords0[i])
                else child.push(coords0[i])
            }
        }
        let result = []
        const symbol = this.geometry.getSymbol()
        const properties = this.geometry.getProperties()
        let geo = new maptalks.Polygon(main, { symbol, properties }).addTo(this.layer)
        result.push(geo)
        geo = new maptalks.Polygon(child, { symbol, properties }).addTo(this.layer)
        result.push(geo)
        return result
    }

    _getTargetGap(target, point0) {
        const coords = this._getSafeCoords(target)
        const polygon = this._getPoint2dFromCoords(this.geometry)
        let record = false
        let index = []
        let indexStart
        this._tmpLayer.hide()
        for (let i = 0; i < coords.length - 1; i++) {
            if (record) index.push(i)
            const line = new maptalks.LineString([coords[i], coords[i + 1]])
            const points = this._getPolygonPolylineIntersectPoints(line)
            if (points.length > 0) {
                if (isEqual(points[0], point0)) indexStart = i + 1
                record = !record
            }
        }
        this._tmpLayer.clear().show()
        if (index[0] !== indexStart) index.reverse()
        let gap = []
        index.forEach((i) => gap.push(coords[i]))
        return gap
    }

    _splitLineWithTargets(targets) {
        targets = this._getLineAvailTargets(targets)
        let result
        targets.forEach((target) => {
            if (result) {
                let results = []
                result.forEach((geo) => {
                    this.geometry = geo
                    results.push(...this._splitLineTargetBase(target))
                })
                result = results
            } else result = this._splitLineTargetBase(target)
            target.remove()
        })
        this._result = result
    }

    _splitLineTargetBase(target) {
        const polyline = this._getPoint2dFromCoords(target)
        const coords = this._getSafeCoords()
        let lineCoord = [coords[0]]
        let lines = []
        for (let i = 0; i < coords.length; i++) {
            if (coords[i + 1]) {
                const line = new maptalks.LineString([coords[i], coords[i + 1]])
                const polylineTmp = this._getPoint2dFromCoords(line)
                const { points } = Intersection.intersectPolylinePolyline(polyline, polylineTmp)
                if (points.length > 0) {
                    const [ects] = this._getCoordsFromPoints(points)
                    lineCoord.push(ects)
                    lines.push(lineCoord)
                    lineCoord = [ects, coords[i + 1]]
                } else lineCoord.push(coords[i + 1])
            } else if (lineCoord.length > 0) {
                lineCoord.push(coords[i])
                lines.push(lineCoord)
            }
        }
        let result = []
        lines.forEach((line) => result.push(new maptalks.LineString(line).addTo(this.layer)))
        this.geometry.remove()
        return result
    }

    _getLineAvailTargets(targets) {
        let avails = []
        targets.forEach((target) => {
            avails.push(...this._getLineAvailTarget(target))
            target.remove()
        })
        return avails
    }

    _getLineAvailTarget(target) {
        let lines = []
        const coords = this._getSafeCoords(target)
        for (let i = 0; i < coords.length - 1; i++) {
            const line = new maptalks.LineString([coords[i], coords[i + 1]])
            const points = this._getPolygonPolylineIntersectPoints(line)
            if (points.length > 0) lines.push(line)
        }
        return lines
    }
}

GeoSplit.mergeOptions(options)
