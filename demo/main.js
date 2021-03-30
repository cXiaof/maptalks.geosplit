// new Map
const map = new maptalks.Map('map', {
    center: [121.387, 31.129],
    zoom: 14,
    baseLayer: new maptalks.TileLayer('base', {
        urlTemplate:
            'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c', 'd'],
        attribution:
            '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
        maxAvailableZoom: 18,
        placeholder: true,
    }),
    scaleControl: { position: 'bottom-right', metric: true, imperial: true },
    zoomControl: {
        position: { top: 80, right: 20 },
        slider: false,
        zoomLevel: true,
    },
    spatialReference: {
        projection: 'EPSG:3857',
        resolutions: (function () {
            const resolutions = []
            const d = 2 * 6378137 * Math.PI
            for (let i = 0; i < 22; i++) {
                resolutions[i] = d / (256 * Math.pow(2, i))
            }
            return resolutions
        })(),
        fullExtent: {
            top: 6378137 * Math.PI,
            bottom: -6378137 * Math.PI,
            left: -6378137 * Math.PI,
            right: 6378137 * Math.PI,
        },
    },
})
new maptalks.CompassControl({
    position: 'top-right',
}).addTo(map)

const gs = new maptalks.GeoSplit()
const layer = new maptalks.VectorLayer('sketchPad').addTo(map)

// add DrawTool
let once = false
const drawTool = new maptalks.DrawTool({ mode: 'Point' }).addTo(map).disable()
drawTool.on('drawend', (param) => {
    const { geometry } = param
    geometry.addTo(layer)
    if (once) drawTool.disable()
})

// new Toolbar
const modes = ['Polygon', 'Rectangle', 'Circle', 'Ellipse']
const children = modes.map((mode) => ({
    item: mode,
    click: () => {
        once = true
        drawTool.setMode(mode).enable()
    },
}))

const toolbar = new maptalks.control.Toolbar({
    position: 'top-left',
    items: [
        { item: 'Draw Once', children },
        {
            item: 'Draw LineString',
            click: () => {
                once = false
                drawTool.setMode('LineString').enable()
            },
        },
        { item: 'Stop drawing', click: () => drawTool.disable() },
        {
            item: 'Clear',
            click: () => {
                layer.clear()
                gs.cancel()
            },
        },
    ],
}).addTo(map)

// add contextmenu event
layer.on('addGeo', () =>
    layer
        .getGeometries()
        .forEach((geo) =>
            geo.on('contextmenu', () => geo.setMenu(getOptions(geo)).openMenu())
        )
)

const getOptions = (geometry) => ({
    items: [
        { item: 'split', click: () => gs.split(geometry) },
        '-',
        {
            item: 'submit',
            click: () =>
                gs.submit((result, deals) => console.log(result, deals)),
        },
        '-',
        { item: 'cancel', click: () => gs.cancel() },
    ],
})

// new tip Panel
const textPanel = new maptalks.control.Panel({
    position: 'bottom-left',
    draggable: true,
    custom: false,
    content: `
        Click a type in <b>Draw Once</b> to draw one geometry (polygon<br />
        or lineString both be ok), then click <b>Draw LineString</b> to draw<br />
        some lines and click <b>Stop drawing</b> to stop.<br />
        Contextmenu on the geometry which you want be split, click<br />
        <b>split</b> and choose one or more lines you draw, click it when it's<br />
        color be changed.<br />
        Finaly, Contextmenu on the geometry again, click <b>submit</b> and<br />
        see the effect.<br />
        <br />
        点击<b>Draw Once</b>里的类型然后画一个相应的图形（线或面类型皆<br />
        可）点击<b>Draw LineString</b>开始画若干条线，点击<b>Stop drawing</b><br />
        停止画线。<br />
        右键你要分隔的图形，选择一条或多条分割线，点击分割线时当<br />
        它被命中线会变色。最后再次右键你要分隔的图形，点击<b>submit</b><br />
        查看效果。
    `,
    closeButton: true,
})
map.addControl(textPanel)
