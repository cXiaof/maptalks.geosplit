/*!
 * maptalks.geosplit v0.1.2
 * LICENSE : MIT
 * (c) 2016-2021 maptalks.org
 */
/*!
 * requires maptalks@>=0.31.0 
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.maptalks = global.maptalks || {})));
}(this, (function (exports) { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var Point2D_1 = createCommonjsModule(function (module) {
    /**
     *
     *   Point2D.js
     *
     *   copyright 2001-2002, 2013, 2017 Kevin Lindsey
     *
     */

    /**
     *  Point2D
     *
     *  @param {Number} x
     *  @param {Number} y
     *  @returns {Point2D}
     */
    function Point2D(x, y) {
        Object.defineProperties(this, {
            "x": {
                value: x !== undefined ? x : 0.0,
                writable: false,
                enumerable: true,
                configurable: false
            },
            "y": {
                value: y !== undefined ? y : 0.0,
                writable: false,
                enumerable: true,
                configurable: false
            }
        });
    }

    /**
     *  clone
     *
     *  @returns {Point2D}
     */
    Point2D.prototype.clone = function () {
        return new this.constructor(this.x, this.y);
    };

    /**
     *  add
     *
     *  @param {Point2D|Vector2D} that
     *  @returns {Point2D}
     */
    Point2D.prototype.add = function (that) {
        return new this.constructor(this.x + that.x, this.y + that.y);
    };

    /**
     *  subtract
     *
     *  @param { Vector2D | Point2D } that
     *  @returns {Point2D}
     */
    Point2D.prototype.subtract = function (that) {
        return new this.constructor(this.x - that.x, this.y - that.y);
    };

    /**
     *  multiply
     *
     *  @param {Number} scalar
     *  @returns {Point2D}
     */
    Point2D.prototype.multiply = function (scalar) {
        return new this.constructor(this.x * scalar, this.y * scalar);
    };

    /**
     *  divide
     *
     *  @param {Number} scalar
     *  @returns {Point2D}
     */
    Point2D.prototype.divide = function (scalar) {
        return new this.constructor(this.x / scalar, this.y / scalar);
    };

    /**
     *  equals
     *
     *  @param {Point2D} that
     *  @returns {Boolean}
     */
    Point2D.prototype.equals = function (that) {
        return this.x === that.x && this.y === that.y;
    };

    /**
     *  precisionEquals
     *
     *  @param {Point2D} that
     *  @param {Number} precision
     *  @returns {Boolean}
     */
    Point2D.prototype.precisionEquals = function (that, precision) {
        return Math.abs(this.x - that.x) < precision && Math.abs(this.y - that.y) < precision;
    };

    // utility methods

    /**
     *  lerp
     *
     *  @param { Vector2D | Point2D } that
     *  @param {Number} t
     @  @returns {Point2D}
     */
    Point2D.prototype.lerp = function (that, t) {
        var omt = 1.0 - t;

        return new this.constructor(this.x * omt + that.x * t, this.y * omt + that.y * t);
    };

    /**
     *  distanceFrom
     *
     *  @param {Point2D} that
     *  @returns {Number}
     */
    Point2D.prototype.distanceFrom = function (that) {
        var dx = this.x - that.x;
        var dy = this.y - that.y;

        return Math.sqrt(dx * dx + dy * dy);
    };

    /**
     *  min
     *
     *  @param {Point2D} that
     *  @returns {Number}
     */
    Point2D.prototype.min = function (that) {
        return new this.constructor(Math.min(this.x, that.x), Math.min(this.y, that.y));
    };

    /**
     *  max
     *
     *  @param {Point2D} that
     *  @returns {Number}
     */
    Point2D.prototype.max = function (that) {
        return new this.constructor(Math.max(this.x, that.x), Math.max(this.y, that.y));
    };

    /**
     *  transform
     *
     *  @param {Matrix2D}
     *  @result {Point2D}
     */
    Point2D.prototype.transform = function (matrix) {
        return new this.constructor(matrix.a * this.x + matrix.c * this.y + matrix.e, matrix.b * this.x + matrix.d * this.y + matrix.f);
    };

    /**
     *  toString
     *
     *  @returns {String}
     */
    Point2D.prototype.toString = function () {
        return "point(" + this.x + "," + this.y + ")";
    };

    {
        module.exports = Point2D;
    }
});

var Vector2D_1 = createCommonjsModule(function (module) {
    /**
     *
     *   Vector2D.js
     *
     *   copyright 2001-2002, 2013, 2017 Kevin Lindsey
     *
     */

    /**
     *  Vector2D
     *
     *  @param {Number} x
     *  @param {Number} y
     *  @returns {Vector2D}
     */
    function Vector2D(x, y) {
        Object.defineProperties(this, {
            "x": {
                value: x !== undefined ? x : 0.0,
                writable: false,
                enumerable: true,
                configurable: false
            },
            "y": {
                value: y !== undefined ? y : 0.0,
                writable: false,
                enumerable: true,
                configurable: false
            }
        });
    }

    /**
     *  fromPoints
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @returns {Vector2D}
     */
    Vector2D.fromPoints = function (p1, p2) {
        return new Vector2D(p2.x - p1.x, p2.y - p1.y);
    };

    /**
     *  length
     *
     *  @returns {Number}
     */
    Vector2D.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    /**
     *  magnitude
     *
     *  @returns {Number}
     */
    Vector2D.prototype.magnitude = function () {
        return this.x * this.x + this.y * this.y;
    };

    /**
     *  dot
     *
     *  @param {Vector2D} that
     *  @returns {Number}
     */
    Vector2D.prototype.dot = function (that) {
        return this.x * that.x + this.y * that.y;
    };

    /**
     *  cross
     *
     *  @param {Vector2D} that
     *  @returns {Number}
     */
    Vector2D.prototype.cross = function (that) {
        return this.x * that.y - this.y * that.x;
    };

    /**
     *  determinant
     *
     *  @param {Vector2D} that
     *  @returns {Number}
     */
    Vector2D.prototype.determinant = function (that) {
        return this.x * that.y - this.y * that.x;
    };

    /**
     *  unit
     *
     *  @returns {Vector2D}
     */
    Vector2D.prototype.unit = function () {
        return this.divide(this.length());
    };

    /**
     *  add
     *
     *  @param {Vector2D} that
     *  @returns {Vector2D}
     */
    Vector2D.prototype.add = function (that) {
        return new this.constructor(this.x + that.x, this.y + that.y);
    };

    /**
     *  subtract
     *
     *  @param {Vector2D} that
     *  @returns {Vector2D}
     */
    Vector2D.prototype.subtract = function (that) {
        return new this.constructor(this.x - that.x, this.y - that.y);
    };

    /**
     *  multiply
     *
     *  @param {Number} scalar
     *  @returns {Vector2D}
     */
    Vector2D.prototype.multiply = function (scalar) {
        return new this.constructor(this.x * scalar, this.y * scalar);
    };

    /**
     *  divide
     *
     *  @param {Number} scalar
     *  @returns {Vector2D}
     */
    Vector2D.prototype.divide = function (scalar) {
        return new this.constructor(this.x / scalar, this.y / scalar);
    };

    /**
     *  angleBetween
     *
     *  @param {Vector2D} that
     *  @returns {Number}
     */
    Vector2D.prototype.angleBetween = function (that) {
        var cos = this.dot(that) / (this.length() * that.length());
        cos = Math.max(-1, Math.min(cos, 1));
        var radians = Math.acos(cos);

        return this.cross(that) < 0.0 ? -radians : radians;
    };

    /**
     *  Find a vector is that is perpendicular to this vector
     *
     *  @returns {Vector2D}
     */
    Vector2D.prototype.perp = function () {
        return new this.constructor(-this.y, this.x);
    };

    /**
     *  Find the component of the specified vector that is perpendicular to
     *  this vector
     *
     *  @param {Vector2D} that
     *  @returns {Vector2D}
     */
    Vector2D.prototype.perpendicular = function (that) {
        return this.subtract(this.project(that));
    };

    /**
     *  project
     *
     *  @param {Vector2D} that
     *  @returns {Vector2D}
     */
    Vector2D.prototype.project = function (that) {
        var percent = this.dot(that) / that.dot(that);

        return that.multiply(percent);
    };

    /**
     *  transform
     *
     *  @param {Matrix2D}
     *  @returns {Vector2D}
     */
    Vector2D.prototype.transform = function (matrix) {
        return new this.constructor(matrix.a * this.x + matrix.c * this.y, matrix.b * this.x + matrix.d * this.y);
    };

    /**
     *  equals
     *
     *  @param {Vector2D} that
     *  @returns {Boolean}
     */
    Vector2D.prototype.equals = function (that) {
        return this.x === that.x && this.y === that.y;
    };

    /**
     *  precisionEquals
     *
     *  @param {Vector2D} that
     *  @param {Number} precision
     *  @returns {Boolean}
     */
    Vector2D.prototype.precisionEquals = function (that, precision) {
        return Math.abs(this.x - that.x) < precision && Math.abs(this.y - that.y) < precision;
    };

    /**
     *  toString
     *
     *  @returns {String}
     */
    Vector2D.prototype.toString = function () {
        return "vector(" + this.x + "," + this.y + ")";
    };

    {
        module.exports = Vector2D;
    }
});

var Matrix2D_1 = createCommonjsModule(function (module) {
    /**
     *   Matrix2D.js
     *
     *   copyright 2001-2002, 2013, 2017 Kevin Lindsey
     */

    function setReadonlyProperty(object, property, value) {
        Object.defineProperty(object, property, {
            value: value,
            writable: false,
            enumerable: true,
            configurable: false
        });
    }

    /**
     *  Identity matrix
     *
     *  @returns {Matrix2D}
     */
    setReadonlyProperty(Matrix2D, "IDENTITY", new Matrix2D(1, 0, 0, 1, 0, 0));
    setReadonlyProperty(Matrix2D.IDENTITY, "isIdentity", function () {
        return true;
    });

    /**
     *  Matrix2D
     *
     *  [a c e]
     *  [b d f]
     *  [0 0 1]
     *
     *  @param {Number} a
     *  @param {Number} b
     *  @param {Number} c
     *  @param {Number} d
     *  @param {Number} e
     *  @param {Number} f
     *  @returns {Matrix2D}
     */
    function Matrix2D(a, b, c, d, e, f) {
        setReadonlyProperty(this, "a", a !== undefined ? a : 1);
        setReadonlyProperty(this, "b", b !== undefined ? b : 0);
        setReadonlyProperty(this, "c", c !== undefined ? c : 0);
        setReadonlyProperty(this, "d", d !== undefined ? d : 1);
        setReadonlyProperty(this, "e", e !== undefined ? e : 0);
        setReadonlyProperty(this, "f", f !== undefined ? f : 0);
    }

    // *** STATIC METHODS

    /**
     *  translation
     *
     *  @param {Number} tx
     *  @param {Number} ty
     *  @returns {Matrix2D}
     */
    Matrix2D.translation = function (tx, ty) {
        return new Matrix2D(1, 0, 0, 1, tx, ty);
    };

    /**
     *  scaling
     *
     *  @param {Number} scale
     *  @returns {Matrix2D}
     */
    Matrix2D.scaling = function (scale) {
        return new Matrix2D(scale, 0, 0, scale, 0, 0);
    };

    /**
     *  scalingAt
     *
     *  @param {Number} scale
     *  @param {Point2D} center
     *  @returns {Matrix2D}
     */
    Matrix2D.scalingAt = function (scale, center) {
        return new Matrix2D(scale, 0, 0, scale, center.x - center.x * scale, center.y - center.y * scale);
    };

    /**
     *  nonUniformScaling
     *
     *  @param {Number} scaleX
     *  @param {Number} scaleY
     *  @returns {Matrix2D}
     */
    Matrix2D.nonUniformScaling = function (scaleX, scaleY) {
        return new Matrix2D(scaleX, 0, 0, scaleY, 0, 0);
    };

    /**
     *  nonUniformScalingAt
     *
     *  @param {Number} scaleX
     *  @param {Number} scaleY
     *  @param {Point2D} center
     *  @returns {Matrix2D}
     */
    Matrix2D.nonUniformScalingAt = function (scaleX, scaleY, center) {
        return new Matrix2D(scaleX, 0, 0, scaleY, center.x - center.x * scaleX, center.y - center.y * scaleY);
    };

    /**
     *  rotation
     *
     *  @param {Number} radians
     *  @returns {Matrix2D}
     */
    Matrix2D.rotation = function (radians) {
        var c = Math.cos(radians);
        var s = Math.sin(radians);

        return new Matrix2D(c, s, -s, c, 0, 0);
    };

    /**
     *  rotationAt
     *
     *  @param {Number} radians
     *  @param {Point2D} center
     *  @returns {Matrix2D}
     */
    Matrix2D.rotationAt = function (radians, center) {
        var c = Math.cos(radians);
        var s = Math.sin(radians);

        return new Matrix2D(c, s, -s, c, center.x - center.x * c + center.y * s, center.y - center.y * c - center.x * s);
    };

    /**
     *  rotationFromVector
     *
     *  @param {Vector2D}
     *  @returns {Matrix2D}
     */
    Matrix2D.rotationFromVector = function (vector) {
        var unit = vector.unit();
        var c = unit.x; // cos
        var s = unit.y; // sin

        return new Matrix2D(c, s, -s, c, 0, 0);
    };

    /**
     *  xFlip
     *
     *  @returns {Matrix2D}
     */
    Matrix2D.xFlip = function () {
        return new Matrix2D(-1, 0, 0, 1, 0, 0);
    };

    /**
     *  yFlip
     *
     *  @returns {Matrix2D}
     */
    Matrix2D.yFlip = function () {
        return new Matrix2D(1, 0, 0, -1, 0, 0);
    };

    /**
     *  xSkew
     *
     *  @param {Number} radians
     *  @returns {Matrix2D}
     */
    Matrix2D.xSkew = function (radians) {
        var t = Math.tan(radians);

        return new Matrix2D(1, 0, t, 1, 0, 0);
    };

    /**
     *  ySkew
     *
     *  @param {Number} radians
     *  @returns {Matrix2D}
     */
    Matrix2D.ySkew = function (radians) {
        var t = Math.tan(radians);

        return new Matrix2D(1, t, 0, 1, 0, 0);
    };

    // *** METHODS

    /**
     *  multiply
     *
     *  @pararm {Matrix2D} that
     *  @returns {Matrix2D}
     */
    Matrix2D.prototype.multiply = function (that) {
        if (this.isIdentity()) {
            return that;
        }

        if (that.isIdentity()) {
            return this;
        }

        return new this.constructor(this.a * that.a + this.c * that.b, this.b * that.a + this.d * that.b, this.a * that.c + this.c * that.d, this.b * that.c + this.d * that.d, this.a * that.e + this.c * that.f + this.e, this.b * that.e + this.d * that.f + this.f);
    };

    /**
     *  inverse
     *
     *  @returns {Matrix2D}
     */
    Matrix2D.prototype.inverse = function () {
        if (this.isIdentity()) {
            return this;
        }

        var det1 = this.a * this.d - this.b * this.c;

        if (det1 === 0.0) {
            throw "Matrix is not invertible";
        }

        var idet = 1.0 / det1;
        var det2 = this.f * this.c - this.e * this.d;
        var det3 = this.e * this.b - this.f * this.a;

        return new this.constructor(this.d * idet, -this.b * idet, -this.c * idet, this.a * idet, det2 * idet, det3 * idet);
    };

    /**
     *  translate
     *
     *  @param {Number} tx
     *  @param {Number} ty
     *  @returns {Matrix2D}
     */
    Matrix2D.prototype.translate = function (tx, ty) {
        return new this.constructor(this.a, this.b, this.c, this.d, this.a * tx + this.c * ty + this.e, this.b * tx + this.d * ty + this.f);
    };

    /**
     *  scale
     *
     *  @param {Number} scale
     *  @returns {Matrix2D}
     */
    Matrix2D.prototype.scale = function (scale) {
        return new this.constructor(this.a * scale, this.b * scale, this.c * scale, this.d * scale, this.e, this.f);
    };

    /**
     *  scaleAt
     *
     *  @param {Number} scale
     *  @param {Point2D} center
     *  @returns {Matrix2D}
     */
    Matrix2D.prototype.scaleAt = function (scale, center) {
        var dx = center.x - scale * center.x;
        var dy = center.y - scale * center.y;

        return new this.constructor(this.a * scale, this.b * scale, this.c * scale, this.d * scale, this.a * dx + this.c * dy + this.e, this.b * dx + this.d * dy + this.f);
    };

    /**
     *  scaleNonUniform
     *
     *  @param {Number} scaleX
     *  @param {Number} scaleY
     *  @returns {Matrix2D}
     */
    Matrix2D.prototype.scaleNonUniform = function (scaleX, scaleY) {
        return new this.constructor(this.a * scaleX, this.b * scaleX, this.c * scaleY, this.d * scaleY, this.e, this.f);
    };

    /**
     *  scaleNonUniformAt
     *
     *  @param {Number} scaleX
     *  @param {Number} scaleY
     *  @param {Point2D} center
     *  @returns {Matrix2D}
     */
    Matrix2D.prototype.scaleNonUniformAt = function (scaleX, scaleY, center) {
        var dx = center.x - scaleX * center.x;
        var dy = center.y - scaleY * center.y;

        return new this.constructor(this.a * scaleX, this.b * scaleX, this.c * scaleY, this.d * scaleY, this.a * dx + this.c * dy + this.e, this.b * dx + this.d * dy + this.f);
    };

    /**
     *  rotate
     *
     *  @param {Number} radians
     *  @returns {Matrix2D}
     */
    Matrix2D.prototype.rotate = function (radians) {
        var c = Math.cos(radians);
        var s = Math.sin(radians);

        return new this.constructor(this.a * c + this.c * s, this.b * c + this.d * s, this.a * -s + this.c * c, this.b * -s + this.d * c, this.e, this.f);
    };

    /**
     *  rotateAt
     *
     *  @param {Number} radians
     *  @param {Point2D} center
     *  @result {Matrix2D}
     */
    Matrix2D.prototype.rotateAt = function (radians, center) {
        var cos = Math.cos(radians);
        var sin = Math.sin(radians);
        var cx = center.x;
        var cy = center.y;

        var a = this.a * cos + this.c * sin;
        var b = this.b * cos + this.d * sin;
        var c = this.c * cos - this.a * sin;
        var d = this.d * cos - this.b * sin;

        return new this.constructor(a, b, c, d, (this.a - a) * cx + (this.c - c) * cy + this.e, (this.b - b) * cx + (this.d - d) * cy + this.f);
    };

    /**
     *  rotateFromVector
     *
     *  @param {Vector2D}
     *  @returns {Matrix2D}
     */
    Matrix2D.prototype.rotateFromVector = function (vector) {
        var unit = vector.unit();
        var c = unit.x; // cos
        var s = unit.y; // sin

        return new this.constructor(this.a * c + this.c * s, this.b * c + this.d * s, this.a * -s + this.c * c, this.b * -s + this.d * c, this.e, this.f);
    };

    /**
     *  flipX
     *
     *  @returns {Matrix2D}
     */
    Matrix2D.prototype.flipX = function () {
        return new this.constructor(-this.a, -this.b, this.c, this.d, this.e, this.f);
    };

    /**
     *  flipY
     *
     *  @returns {Matrix2D}
     */
    Matrix2D.prototype.flipY = function () {
        return new this.constructor(this.a, this.b, -this.c, -this.d, this.e, this.f);
    };

    /**
     *  skewX
     *
     *  @pararm {Number} radians
     *  @returns {Matrix2D}
     */
    Matrix2D.prototype.skewX = function (radians) {
        var t = Math.tan(radians);

        return new this.constructor(this.a, this.b, this.c + this.a * t, this.d + this.b * t, this.e, this.f);
    };

    // TODO: skewXAt

    /**
     *  skewY
     *
     *  @pararm {Number} radians
     *  @returns {Matrix2D}
     */
    Matrix2D.prototype.skewY = function (radians) {
        var t = Math.tan(radians);

        return new this.constructor(this.a + this.c * t, this.b + this.d * t, this.c, this.d, this.e, this.f);
    };

    // TODO: skewYAt

    /**
     *  isIdentity
     *
     *  @returns {Boolean}
     */
    Matrix2D.prototype.isIdentity = function () {
        return this.a === 1.0 && this.b === 0.0 && this.c === 0.0 && this.d === 1.0 && this.e === 0.0 && this.f === 0.0;
    };

    /**
     *  isInvertible
     *
     *  @returns {Boolean}
     */
    Matrix2D.prototype.isInvertible = function () {
        return this.a * this.d - this.b * this.c !== 0.0;
    };

    /**
     *  getScale
     *
     *  @returns {{ scaleX: Number, scaleY: Number }}
     */
    Matrix2D.prototype.getScale = function () {
        return {
            scaleX: Math.sqrt(this.a * this.a + this.c * this.c),
            scaleY: Math.sqrt(this.b * this.b + this.d * this.d)
        };
    };

    /**
     *  getDecomposition
     *
     *  Calculates matrix Singular Value Decomposition
     *
     *  The resulting matrices, translation, rotation, scale, and rotation0, return
     *  this matrix when they are muliplied together in the listed order
     *
     *  @see Jim Blinn's article {@link http://dx.doi.org/10.1109/38.486688}
     *  @see {@link http://math.stackexchange.com/questions/861674/decompose-a-2d-arbitrary-transform-into-only-scaling-and-rotation}
     *
     *  @returns {{ translation: Matrix2D, rotation: Matrix2D, scale: Matrix2D, rotation0: Matrix2D }}
     */
    Matrix2D.prototype.getDecomposition = function () {
        var E = (this.a + this.d) * 0.5;
        var F = (this.a - this.d) * 0.5;
        var G = (this.b + this.c) * 0.5;
        var H = (this.b - this.c) * 0.5;

        var Q = Math.sqrt(E * E + H * H);
        var R = Math.sqrt(F * F + G * G);
        var scaleX = Q + R;
        var scaleY = Q - R;

        var a1 = Math.atan2(G, F);
        var a2 = Math.atan2(H, E);
        var theta = (a2 - a1) * 0.5;
        var phi = (a2 + a1) * 0.5;

        // TODO: Add static methods to generate translation, rotation, etc.
        // matrices directly

        return {
            translation: new this.constructor(1, 0, 0, 1, this.e, this.f),
            rotation: this.constructor.IDENTITY.rotate(phi),
            scale: new this.constructor(scaleX, 0, 0, scaleY, 0, 0),
            rotation0: this.constructor.IDENTITY.rotate(theta)
        };
    };

    /**
     *  equals
     *
     *  @param {Matrix2D} that
     *  @returns {Boolean}
     */
    Matrix2D.prototype.equals = function (that) {
        return this.a === that.a && this.b === that.b && this.c === that.c && this.d === that.d && this.e === that.e && this.f === that.f;
    };

    /**
     *  precisionEquals
     *
     *  @param {Matrix2D} that
     *  @param {Number} precision
     *  @returns {Boolean}
     */
    Matrix2D.prototype.precisionEquals = function (that, precision) {
        return Math.abs(this.a - that.a) < precision && Math.abs(this.b - that.b) < precision && Math.abs(this.c - that.c) < precision && Math.abs(this.d - that.d) < precision && Math.abs(this.e - that.e) < precision && Math.abs(this.f - that.f) < precision;
    };

    /**
     *  toString
     *
     *  @returns {String}
     */
    Matrix2D.prototype.toString = function () {
        return "matrix(" + [this.a, this.b, this.c, this.d, this.e, this.f].join(",") + ")";
    };

    {
        module.exports = Matrix2D;
    }
});

// expose classes

var Point2D$1 = Point2D_1;
var Vector2D$1 = Vector2D_1;
var Matrix2D$1 = Matrix2D_1;

var kldAffine = {
	Point2D: Point2D$1,
	Vector2D: Vector2D$1,
	Matrix2D: Matrix2D$1
};

var Polynomial_1 = createCommonjsModule(function (module) {
    /**
     *
     *   Polynomial.js
     *
     *   copyright 2002, 2013 Kevin Lindsey
     * 
     *   contribution {@link http://github.com/Quazistax/kld-polynomial}
     *       @copyright 2015 Robert Benko (Quazistax) <quazistax@gmail.com>
     *       @license MIT
     */

    Polynomial.TOLERANCE = 1e-6;
    Polynomial.ACCURACY = 15;

    /**
     *  interpolate
     *
     *  Based on poloint in "Numerical Recipes in C, 2nd Edition", pages 109-110
     *
     *  @param {Array<Number>} xs
     *  @param {Array<Number>} ys
     *  @param {Number} n
     *  @param {Number} offset
     *  @param {Number} x
     *
     *  @returns {{y: Number, dy: Number}}
     */
    Polynomial.interpolate = function (xs, ys, n, offset, x) {
        if (xs.constructor !== Array || ys.constructor !== Array) {
            throw new Error("Polynomial.interpolate: xs and ys must be arrays");
        }
        if (isNaN(n) || isNaN(offset) || isNaN(x)) {
            throw new Error("Polynomial.interpolate: n, offset, and x must be numbers");
        }

        var y = 0;
        var dy = 0;
        var c = new Array(n);
        var d = new Array(n);
        var ns = 0;

        var diff = Math.abs(x - xs[offset]);

        for (var i = 0; i < n; i++) {
            var dift = Math.abs(x - xs[offset + i]);

            if (dift < diff) {
                ns = i;
                diff = dift;
            }
            c[i] = d[i] = ys[offset + i];
        }

        y = ys[offset + ns];
        ns--;

        for (var m = 1; m < n; m++) {
            for (var i = 0; i < n - m; i++) {
                var ho = xs[offset + i] - x;
                var hp = xs[offset + i + m] - x;
                var w = c[i + 1] - d[i];
                var den = ho - hp;

                if (den == 0.0) {
                    throw new Error("Unable to interpolate polynomial. Two numbers in n were identical (to within roundoff)");
                }

                den = w / den;
                d[i] = hp * den;
                c[i] = ho * den;
            }

            dy = 2 * (ns + 1) < n - m ? c[ns + 1] : d[ns--];
            y += dy;
        }

        return { y: y, dy: dy };
    };

    /**
     *  Polynomial
     *
     *  @returns {Polynomial}
     */
    function Polynomial() {
        this.init(arguments);
    }

    /**
     *  init
     */
    Polynomial.prototype.init = function (coefs) {
        this.coefs = new Array();

        for (var i = coefs.length - 1; i >= 0; i--) {
            this.coefs.push(coefs[i]);
        }this._variable = "t";
        this._s = 0;
    };

    /**
     *  eval
     */
    Polynomial.prototype.eval = function (x) {
        if (isNaN(x)) {
            throw new Error("Polynomial.eval: parameter must be a number");
        }

        var result = 0;

        for (var i = this.coefs.length - 1; i >= 0; i--) {
            result = result * x + this.coefs[i];
        }

        return result;
    };

    /**
     *  add
     */
    Polynomial.prototype.add = function (that) {
        var result = new Polynomial();
        var d1 = this.getDegree();
        var d2 = that.getDegree();
        var dmax = Math.max(d1, d2);

        for (var i = 0; i <= dmax; i++) {
            var v1 = i <= d1 ? this.coefs[i] : 0;
            var v2 = i <= d2 ? that.coefs[i] : 0;

            result.coefs[i] = v1 + v2;
        }

        return result;
    };

    /**
     *  multiply
     */
    Polynomial.prototype.multiply = function (that) {
        var result = new Polynomial();

        for (var i = 0; i <= this.getDegree() + that.getDegree(); i++) {
            result.coefs.push(0);
        }

        for (var i = 0; i <= this.getDegree(); i++) {
            for (var j = 0; j <= that.getDegree(); j++) {
                result.coefs[i + j] += this.coefs[i] * that.coefs[j];
            }
        }

        return result;
    };

    /**
     *  divide_scalar
     */
    Polynomial.prototype.divide_scalar = function (scalar) {
        for (var i = 0; i < this.coefs.length; i++) {
            this.coefs[i] /= scalar;
        }
    };

    /**
     *  simplify
     */
    Polynomial.prototype.simplify = function (TOLERANCE) {
        if (TOLERANCE === undefined) TOLERANCE = 1e-12;

        for (var i = this.getDegree(); i >= 0; i--) {
            if (Math.abs(this.coefs[i]) <= TOLERANCE) {
                this.coefs.pop();
            } else {
                break;
            }
        }
    };

    /**
     *  bisection
     */
    Polynomial.prototype.bisection = function (min, max) {
        var minValue = this.eval(min);
        var maxValue = this.eval(max);
        var result;

        if (Math.abs(minValue) <= Polynomial.TOLERANCE) {
            result = min;
        } else if (Math.abs(maxValue) <= Polynomial.TOLERANCE) {
            result = max;
        } else if (minValue * maxValue <= 0) {
            var tmp1 = Math.log(max - min);
            var tmp2 = Math.LN10 * Polynomial.ACCURACY;
            var iters = Math.ceil((tmp1 + tmp2) / Math.LN2);

            for (var i = 0; i < iters; i++) {
                result = 0.5 * (min + max);
                var value = this.eval(result);

                if (Math.abs(value) <= Polynomial.TOLERANCE) {
                    break;
                }

                if (value * minValue < 0) {
                    max = result;
                    maxValue = value;
                } else {
                    min = result;
                    minValue = value;
                }
            }
        }

        return result;
    };

    /**
     *  toString
     */
    Polynomial.prototype.toString = function () {
        var coefs = new Array();
        var signs = new Array();

        for (var i = this.coefs.length - 1; i >= 0; i--) {
            var value = Math.round(this.coefs[i] * 1000) / 1000;
            //var value = this.coefs[i];

            if (value != 0) {
                var sign = value < 0 ? " - " : " + ";

                value = Math.abs(value);

                if (i > 0) {
                    if (value == 1) {
                        value = this._variable;
                    } else {
                        value += this._variable;
                    }
                }

                if (i > 1) {
                    value += "^" + i;
                }

                signs.push(sign);
                coefs.push(value);
            }
        }

        signs[0] = signs[0] == " + " ? "" : "-";

        var result = "";

        for (var i = 0; i < coefs.length; i++) {
            result += signs[i] + coefs[i];
        }

        return result;
    };

    /**
     *  trapezoid
     *
     *  Based on trapzd in "Numerical Recipes in C, 2nd Edition", page 137
     */
    Polynomial.prototype.trapezoid = function (min, max, n) {
        if (isNaN(min) || isNaN(max) || isNaN(n)) {
            throw new Error("Polynomial.trapezoid: parameters must be numbers");
        }

        var range = max - min;
        var TOLERANCE = 1e-7;

        if (n == 1) {
            var minValue = this.eval(min);
            var maxValue = this.eval(max);

            this._s = 0.5 * range * (minValue + maxValue);
        } else {
            var it = 1 << n - 2;
            var delta = range / it;
            var x = min + 0.5 * delta;
            var sum = 0;

            for (var i = 0; i < it; i++) {
                sum += this.eval(x);
                x += delta;
            }

            this._s = 0.5 * (this._s + range * sum / it);
        }

        if (isNaN(this._s)) {
            throw new Error("Polynomial.trapezoid: this._s is NaN");
        }

        return this._s;
    };

    /**
     *  simpson
     *
     *  Based on trapzd in "Numerical Recipes in C, 2nd Edition", page 139
     */
    Polynomial.prototype.simpson = function (min, max) {
        if (isNaN(min) || isNaN(max)) {
            throw new Error("Polynomial.simpson: parameters must be numbers");
        }

        var range = max - min;
        var st = 0.5 * range * (this.eval(min) + this.eval(max));
        var t = st;
        var s = 4.0 * st / 3.0;
        var os = s;
        var ost = st;
        var TOLERANCE = 1e-7;

        var it = 1;

        for (var n = 2; n <= 20; n++) {
            var delta = range / it;
            var x = min + 0.5 * delta;
            var sum = 0;

            for (var i = 1; i <= it; i++) {
                sum += this.eval(x);
                x += delta;
            }

            t = 0.5 * (t + range * sum / it);
            st = t;
            s = (4.0 * st - ost) / 3.0;

            if (Math.abs(s - os) < TOLERANCE * Math.abs(os)) {
                break;
            }

            os = s;
            ost = st;
            it <<= 1;
        }

        return s;
    };

    /**
     *  romberg
     */
    Polynomial.prototype.romberg = function (min, max) {
        if (isNaN(min) || isNaN(max)) {
            throw new Error("Polynomial.romberg: parameters must be numbers");
        }

        var MAX = 20;
        var K = 3;
        var TOLERANCE = 1e-6;
        var s = new Array(MAX + 1);
        var h = new Array(MAX + 1);
        var result = { y: 0, dy: 0 };

        h[0] = 1.0;

        for (var j = 1; j <= MAX; j++) {
            s[j - 1] = this.trapezoid(min, max, j);

            if (j >= K) {
                result = Polynomial.interpolate(h, s, K, j - K, 0.0);
                if (Math.abs(result.dy) <= TOLERANCE * result.y) break;
            }

            s[j] = s[j - 1];
            h[j] = 0.25 * h[j - 1];
        }

        return result.y;
    };

    // getters and setters

    /**
     *  get degree
     */
    Polynomial.prototype.getDegree = function () {
        return this.coefs.length - 1;
    };

    /**
     *  getDerivative
     */
    Polynomial.prototype.getDerivative = function () {
        var derivative = new Polynomial();

        for (var i = 1; i < this.coefs.length; i++) {
            derivative.coefs.push(i * this.coefs[i]);
        }

        return derivative;
    };

    /**
     *  getRoots
     */
    Polynomial.prototype.getRoots = function () {
        var result;

        this.simplify();

        switch (this.getDegree()) {
            case 0:
                result = [];break;
            case 1:
                result = this.getLinearRoot();break;
            case 2:
                result = this.getQuadraticRoots();break;
            case 3:
                result = this.getCubicRoots();break;
            case 4:
                result = this.getQuarticRoots();break;
            default:
                result = [];
        }

        return result;
    };

    /**
     *  getRootsInInterval
     */
    Polynomial.prototype.getRootsInInterval = function (min, max) {
        var roots = new Array();
        var root;

        if (this.getDegree() == 1) {
            root = this.bisection(min, max);

            if (root != null) {
                roots.push(root);
            }
        } else {
            // get roots of derivative
            var deriv = this.getDerivative();
            var droots = deriv.getRootsInInterval(min, max);

            if (droots.length > 0) {
                // find root on [min, droots[0]]
                root = this.bisection(min, droots[0]);

                if (root != null) {
                    roots.push(root);
                }

                // find root on [droots[i],droots[i+1]] for 0 <= i <= count-2
                for (i = 0; i <= droots.length - 2; i++) {
                    root = this.bisection(droots[i], droots[i + 1]);

                    if (root != null) {
                        roots.push(root);
                    }
                }

                // find root on [droots[count-1],xmax]
                root = this.bisection(droots[droots.length - 1], max);

                if (root != null) {
                    roots.push(root);
                }
            } else {
                // polynomial is monotone on [min,max], has at most one root
                root = this.bisection(min, max);

                if (root != null) {
                    roots.push(root);
                }
            }
        }

        return roots;
    };

    /**
     *  getLinearRoot
     */
    Polynomial.prototype.getLinearRoot = function () {
        var result = [];
        var a = this.coefs[1];

        if (a != 0) {
            result.push(-this.coefs[0] / a);
        }

        return result;
    };

    /**
     *  getQuadraticRoots
     */
    Polynomial.prototype.getQuadraticRoots = function () {
        var results = [];

        if (this.getDegree() == 2) {
            var a = this.coefs[2];
            var b = this.coefs[1] / a;
            var c = this.coefs[0] / a;
            var d = b * b - 4 * c;

            if (d > 0) {
                var e = Math.sqrt(d);

                results.push(0.5 * (-b + e));
                results.push(0.5 * (-b - e));
            } else if (d == 0) {
                // really two roots with same value, but we only return one
                results.push(0.5 * -b);
            }
        }

        return results;
    };

    /**
     *  getCubicRoots
     *
     *  This code is based on MgcPolynomial.cpp written by David Eberly.  His
     *  code along with many other excellent examples are avaiable at his site:
     *  http://www.geometrictools.com
     */
    Polynomial.prototype.getCubicRoots = function () {
        var results = [];

        if (this.getDegree() == 3) {
            var c3 = this.coefs[3];
            var c2 = this.coefs[2] / c3;
            var c1 = this.coefs[1] / c3;
            var c0 = this.coefs[0] / c3;

            var a = (3 * c1 - c2 * c2) / 3;
            var b = (2 * c2 * c2 * c2 - 9 * c1 * c2 + 27 * c0) / 27;
            var offset = c2 / 3;
            var discrim = b * b / 4 + a * a * a / 27;
            var halfB = b / 2;

            var ZEROepsilon = this.zeroErrorEstimate();
            if (Math.abs(discrim) <= ZEROepsilon) {
                discrim = 0;
            }

            if (discrim > 0) {
                var e = Math.sqrt(discrim);
                var tmp;
                var root;

                tmp = -halfB + e;

                if (tmp >= 0) {
                    root = Math.pow(tmp, 1 / 3);
                } else {
                    root = -Math.pow(-tmp, 1 / 3);
                }

                tmp = -halfB - e;

                if (tmp >= 0) {
                    root += Math.pow(tmp, 1 / 3);
                } else {
                    root -= Math.pow(-tmp, 1 / 3);
                }

                results.push(root - offset);
            } else if (discrim < 0) {
                var distance = Math.sqrt(-a / 3);
                var angle = Math.atan2(Math.sqrt(-discrim), -halfB) / 3;
                var cos = Math.cos(angle);
                var sin = Math.sin(angle);
                var sqrt3 = Math.sqrt(3);

                results.push(2 * distance * cos - offset);
                results.push(-distance * (cos + sqrt3 * sin) - offset);
                results.push(-distance * (cos - sqrt3 * sin) - offset);
            } else {
                var tmp;

                if (halfB >= 0) {
                    tmp = -Math.pow(halfB, 1 / 3);
                } else {
                    tmp = Math.pow(-halfB, 1 / 3);
                }

                results.push(2 * tmp - offset);
                // really should return next root twice, but we return only one
                results.push(-tmp - offset);
            }
        }

        return results;
    };

    /**
     *  Sign of a number (+1, -1, +0, -0).
     */
    var sign = function sign(x) {
        return typeof x === 'number' ? x ? x < 0 ? -1 : 1 : x === x ? x : NaN : NaN;
    };

    /**
     *  Calculates roots of quartic polynomial. <br/>
     *  First, derivative roots are found, then used to split quartic polynomial 
     *  into segments, each containing one root of quartic polynomial.
     *  Segments are then passed to newton's method to find roots.
     *
     *  @returns {Array<Number>} roots
     */
    Polynomial.prototype.getQuarticRoots = function () {
        var results = [];

        var n = this.getDegree();

        if (n == 4) {
            var poly = new Polynomial();

            poly.coefs = this.coefs.slice();
            poly.divide_scalar(poly.coefs[n]);

            var ERRF = 1e-15;

            if (Math.abs(poly.coefs[0]) < 10 * ERRF * Math.abs(poly.coefs[3])) {
                poly.coefs[0] = 0;
            }

            var poly_d = poly.getDerivative();
            var derrt = poly_d.getRoots().sort(function (a, b) {
                return a - b;
            });
            var dery = [];
            var nr = derrt.length - 1;
            var i;
            var rb = this.bounds();

            maxabsX = Math.max(Math.abs(rb.minX), Math.abs(rb.maxX));

            var ZEROepsilon = this.zeroErrorEstimate(maxabsX);

            for (i = 0; i <= nr; i++) {
                dery.push(poly.eval(derrt[i]));
            }

            for (i = 0; i <= nr; i++) {
                if (Math.abs(dery[i]) < ZEROepsilon) {
                    dery[i] = 0;
                }
            }

            i = 0;
            var dx = Math.max(0.1 * (rb.maxX - rb.minX) / n, ERRF);
            var guesses = [];
            var minmax = [];

            if (nr > -1) {
                if (dery[0] != 0) {
                    if (sign(dery[0]) != sign(poly.eval(derrt[0] - dx) - dery[0])) {
                        guesses.push(derrt[0] - dx);
                        minmax.push([rb.minX, derrt[0]]);
                    }
                } else {
                    results.push(derrt[0], derrt[0]);
                    i++;
                }

                for (; i < nr; i++) {
                    if (dery[i + 1] == 0) {
                        results.push(derrt[i + 1], derrt[i + 1]);
                        i++;
                    } else if (sign(dery[i]) != sign(dery[i + 1])) {
                        guesses.push((derrt[i] + derrt[i + 1]) / 2);
                        minmax.push([derrt[i], derrt[i + 1]]);
                    }
                }
                if (dery[nr] != 0 && sign(dery[nr]) != sign(poly.eval(derrt[nr] + dx) - dery[nr])) {
                    guesses.push(derrt[nr] + dx);
                    minmax.push([derrt[nr], rb.maxX]);
                }
            }

            var f = function f(x) {
                return poly.eval(x);
            };
            var df = function df(x) {
                return poly_d.eval(x);
            };

            if (guesses.length > 0) {
                for (i = 0; i < guesses.length; i++) {
                    guesses[i] = Polynomial.newton_secant_bisection(guesses[i], f, df, 32, minmax[i][0], minmax[i][1]);
                }
            }

            results = results.concat(guesses);
        }

        return results;
    };

    /**
     *  Estimate what is the maximum polynomial evaluation error value under which polynomial evaluation could be in fact 0.
     *  
     *  @returns {Number} 
     */
    Polynomial.prototype.zeroErrorEstimate = function (maxabsX) {
        var poly = this;
        var ERRF = 1e-15;

        if (typeof maxabsX === 'undefined') {
            var rb = poly.bounds();
            maxabsX = Math.max(Math.abs(rb.minX), Math.abs(rb.maxX));
        }

        if (maxabsX < 0.001) {
            return 2 * Math.abs(poly.eval(ERRF));
        }

        var n = poly.coefs.length - 1;
        var an = poly.coefs[n];

        return 10 * ERRF * poly.coefs.reduce(function (m, v, i) {
            var nm = v / an * Math.pow(maxabsX, i);
            return nm > m ? nm : m;
        }, 0);
    };

    /**
     *  Calculates upper Real roots bounds. <br/>
     *  Real roots are in interval [negX, posX]. Determined by Fujiwara method.
     *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
     *
     *  @returns {{ negX: Number, posX: Number }}
     */
    Polynomial.prototype.bounds_UpperReal_Fujiwara = function () {
        var a = this.coefs;
        var n = a.length - 1;
        var an = a[n];

        if (an != 1) {
            a = this.coefs.map(function (v) {
                return v / an;
            });
        }

        var b = a.map(function (v, i) {
            return i < n ? Math.pow(Math.abs(i == 0 ? v / 2 : v), 1 / (n - i)) : v;
        });

        var coefSelectionFunc;
        var find2Max = function find2Max(acc, bi, i) {
            if (coefSelectionFunc(i)) {
                if (acc.max < bi) {
                    acc.nearmax = acc.max;
                    acc.max = bi;
                } else if (acc.nearmax < bi) {
                    acc.nearmax = bi;
                }
            }
            return acc;
        };

        coefSelectionFunc = function coefSelectionFunc(i) {
            return i < n && a[i] < 0;
        };
        var max_nearmax_pos = b.reduce(find2Max, { max: 0, nearmax: 0 });

        coefSelectionFunc = function coefSelectionFunc(i) {
            return i < n && (n % 2 == i % 2 ? a[i] < 0 : a[i] > 0);
        };
        var max_nearmax_neg = b.reduce(find2Max, { max: 0, nearmax: 0 });

        return {
            negX: -2 * max_nearmax_neg.max,
            posX: 2 * max_nearmax_pos.max
        };
    };

    /** 
     *  Calculates lower Real roots bounds. <br/>
     *  There are no Real roots in interval <negX, posX>. Determined by Fujiwara method.
     *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
     *
     *  @returns {{ negX: Number, posX: Number }}
     */
    Polynomial.prototype.bounds_LowerReal_Fujiwara = function () {
        var poly = new Polynomial();

        poly.coefs = this.coefs.slice().reverse();

        var res = poly.bounds_UpperReal_Fujiwara();

        res.negX = 1 / res.negX;
        res.posX = 1 / res.posX;

        return res;
    };

    /** 
     *  Calculates left and right Real roots bounds. <br/>
     *  Real roots are in interval [minX, maxX]. Combines Fujiwara lower and upper bounds to get minimal interval.
     *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
     *
     *  @returns {{ minX: Number, maxX: Number }}
    */
    Polynomial.prototype.bounds = function () {
        var urb = this.bounds_UpperReal_Fujiwara();
        var rb = { minX: urb.negX, maxX: urb.posX };

        if (urb.negX === 0 && urb.posX === 0) {
            return rb;
        }

        if (urb.negX === 0) {
            rb.minX = this.bounds_LowerReal_Fujiwara().posX;
        } else if (urb.posX === 0) {
            rb.maxX = this.bounds_LowerReal_Fujiwara().negX;
        }

        if (rb.minX > rb.maxX) {
            //console.log('Polynomial.prototype.bounds: poly has no real roots? or floating point error?');
            rb.minX = rb.maxX = 0;
        }

        return rb;
        // TODO: if sure that there are no complex roots 
        // (maybe by using Sturm's theorem) use:
        // return this.bounds_Real_Laguerre();
    };

    /**
     *  Newton's (Newton-Raphson) method for finding Real roots on univariate function. <br/>
     *  When using bounds, algorithm falls back to secant if newton goes out of range.
     *  Bisection is fallback for secant when determined secant is not efficient enough.
     *  @see {@link http://en.wikipedia.org/wiki/Newton%27s_method}
     *  @see {@link http://en.wikipedia.org/wiki/Secant_method}
     *  @see {@link http://en.wikipedia.org/wiki/Bisection_method}
     *
     *  @param {Number} x0 - Inital root guess
     *  @param {function(x)} f - Function which root we are trying to find
     *  @param {function(x)} df - Derivative of function f
     *  @param {Number} max_iterations - Maximum number of algorithm iterations
     *  @param {Number} [min_x] - Left bound value
     *  @param {Number} [max_x] - Right bound value
     *  @returns {Number} - root
     */
    Polynomial.newton_secant_bisection = function (x0, f, df, max_iterations, min, max) {
        var x,
            prev_dfx = 0,
            dfx,
            prev_x_ef_correction = 0,
            x_correction,
            x_new;
        var v, y_atmin, y_atmax;

        x = x0;

        var ACCURACY = 14;
        var min_correction_factor = Math.pow(10, -ACCURACY);
        var isBounded = typeof min === 'number' && typeof max === 'number';

        if (isBounded) {
            if (min > max) {
                throw new Error("newton root finding: min must be greater than max");
            }

            y_atmin = f(min);
            y_atmax = f(max);

            if (sign(y_atmin) == sign(y_atmax)) {
                throw new Error("newton root finding: y values of bounds must be of opposite sign");
            }
        }

        var isEnoughCorrection = function isEnoughCorrection() {
            // stop if correction is too small or if correction is in simple loop
            return Math.abs(x_correction) <= min_correction_factor * Math.abs(x) || prev_x_ef_correction == x - x_correction - x;
        };

        var i;

        for (i = 0; i < max_iterations; i++) {
            dfx = df(x);

            if (dfx == 0) {
                if (prev_dfx == 0) {
                    // error
                    throw new Error("newton root finding: df(x) is zero");
                } else {
                    // use previous derivation value
                    dfx = prev_dfx;
                }
                // or move x a little?
                //dfx = df(x != 0 ? x + x * 1e-15 : 1e-15);
            }

            prev_dfx = dfx;
            y = f(x);
            x_correction = y / dfx;
            x_new = x - x_correction;

            if (isEnoughCorrection()) {
                break;
            }

            if (isBounded) {
                if (sign(y) == sign(y_atmax)) {
                    max = x;
                    y_atmax = y;
                } else if (sign(y) == sign(y_atmin)) {
                    min = x;
                    y_atmin = y;
                } else {
                    x = x_new;
                    break;
                }

                if (x_new < min || x_new > max) {
                    if (sign(y_atmin) == sign(y_atmax)) {
                        break;
                    }

                    var RATIO_LIMIT = 50;
                    var AIMED_BISECT_OFFSET = 0.25; // [0, 0.5)
                    var dy = y_atmax - y_atmin;
                    var dx = max - min;

                    if (dy == 0) {
                        x_correction = x - (min + dx * 0.5);
                    } else if (Math.abs(dy / Math.min(y_atmin, y_atmax)) > RATIO_LIMIT) {
                        x_correction = x - (min + dx * (0.5 + (Math.abs(y_atmin) < Math.abs(y_atmax) ? -AIMED_BISECT_OFFSET : AIMED_BISECT_OFFSET)));
                    } else {
                        x_correction = x - (min - y_atmin / dy * dx);
                    }
                    x_new = x - x_correction;

                    if (isEnoughCorrection()) {
                        break;
                    }
                }
            }

            prev_x_ef_correction = x - x_new;
            x = x_new;
        }

        return x;
    };

    {
        module.exports = Polynomial;
    }
});

var SqrtPolynomial_1 = createCommonjsModule(function (module) {
    /**
     *
     *   SqrtPolynomial.js
     *
     *   copyright 2003, 2013 Kevin Lindsey
     *
     */

    {
        var Polynomial = Polynomial_1;
    }

    /**
     *   class variables
     */
    SqrtPolynomial.VERSION = 1.0;

    // setup inheritance
    SqrtPolynomial.prototype = new Polynomial();
    SqrtPolynomial.prototype.constructor = SqrtPolynomial;
    SqrtPolynomial.superclass = Polynomial.prototype;

    /**
     *  SqrtPolynomial
     */
    function SqrtPolynomial() {
        this.init(arguments);
    }

    /**
     *  eval
     *
     *  @param {Number} x
     *  @returns {Number}
     */
    SqrtPolynomial.prototype.eval = function (x) {
        var TOLERANCE = 1e-7;
        var result = SqrtPolynomial.superclass.eval.call(this, x);

        // NOTE: May need to change the following.  I added these to capture
        // some really small negative values that were being generated by one
        // of my Bezier arcLength functions
        if (Math.abs(result) < TOLERANCE) result = 0;
        if (result < 0) throw new Error("SqrtPolynomial.eval: cannot take square root of negative number");

        return Math.sqrt(result);
    };

    SqrtPolynomial.prototype.toString = function () {
        var result = SqrtPolynomial.superclass.toString.call(this);

        return "sqrt(" + result + ")";
    };

    {
        module.exports = SqrtPolynomial;
    }
});

// expose classes

var Polynomial = Polynomial_1;
var SqrtPolynomial = SqrtPolynomial_1;

var kldPolynomial = {
	Polynomial: Polynomial,
	SqrtPolynomial: SqrtPolynomial
};

var Intersection_1 = createCommonjsModule(function (module) {
    /**
     *
     *  Intersection.js
     *
     *  copyright 2002, 2013 Kevin Lindsey
     *
     */

    {
        var Point2D = kldAffine.Point2D,
            Vector2D = kldAffine.Vector2D,
            Polynomial = kldPolynomial.Polynomial;
    }

    /**
     *  closePolygon
     *
     *  @param {Array<Point2D>} points
     *  @returns {Array<Point2D>}
     */
    function closePolygon(points) {
        var copy = points.slice();

        copy.push(points[0]);

        return copy;
    }

    /**
     *  Intersection
     */
    function Intersection(status) {
        this.init(status);
    }

    /**
     *  init
     *
     *  @param {String} status
     *  @returns {Intersection}
     */
    Intersection.prototype.init = function (status) {
        this.status = status;
        this.points = new Array();
    };

    /**
     *  appendPoint
     *
     *  @param {Point2D} point
     */
    Intersection.prototype.appendPoint = function (point) {
        this.points.push(point);
    };

    /**
     *  appendPoints
     *
     *  @param {Array<Point2D>} points
     */
    Intersection.prototype.appendPoints = function (points) {
        this.points = this.points.concat(points);
    };

    // static methods

    /**
     *  intersect
     *
     *  @param {IntersectionArgs} shape1
     *  @param {IntersectionArgs} shape2
     *  @returns {Intersection}
     */
    Intersection.intersect = function (shape1, shape2) {
        var result;

        if (shape1 != null && shape2 != null) {
            if (shape1.name == "Path") {
                result = Intersection.intersectPathShape(shape1, shape2);
            } else if (shape2.name == "Path") {
                result = Intersection.intersectPathShape(shape2, shape1);
            } else {
                var method;
                var args;

                if (shape1.name < shape2.name) {
                    method = "intersect" + shape1.name + shape2.name;
                    args = shape1.args.concat(shape2.args);
                } else {
                    method = "intersect" + shape2.name + shape1.name;
                    args = shape2.args.concat(shape1.args);
                }

                if (!(method in Intersection)) {
                    throw new Error("Intersection not available: " + method);
                }

                result = Intersection[method].apply(null, args);
            }
        } else {
            result = new Intersection("No Intersection");
        }

        return result;
    };

    /**
     *  intersectPathShape
     *
     *  @param {IntersectionArgs} path
     *  @param {IntersectionArgs} shape
     *  @returns {Intersection}
     */
    Intersection.intersectPathShape = function (path, shape) {
        var result = new Intersection("No Intersection");
        var length = path.args.length;

        for (var i = 0; i < length; i++) {
            var segment = path.args[i];
            var inter = Intersection.intersect(segment, shape);

            result.appendPoints(inter.points);
        }

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectBezier2Bezier2
     *
     *  @param {Point2D} a1
     *  @param {Point2D} a2
     *  @param {Point2D} a3
     *  @param {Point2D} b1
     *  @param {Point2D} b2
     *  @param {Point2D} b3
     *  @returns {Intersection}
     */
    Intersection.intersectBezier2Bezier2 = function (a1, a2, a3, b1, b2, b3) {
        var a, b;
        var c12, c11, c10;
        var c22, c21, c20;
        var result = new Intersection("No Intersection");

        a = a2.multiply(-2);
        c12 = a1.add(a.add(a3));

        a = a1.multiply(-2);
        b = a2.multiply(2);
        c11 = a.add(b);

        c10 = new Point2D(a1.x, a1.y);

        a = b2.multiply(-2);
        c22 = b1.add(a.add(b3));

        a = b1.multiply(-2);
        b = b2.multiply(2);
        c21 = a.add(b);

        c20 = new Point2D(b1.x, b1.y);

        // bezout
        var a = c12.x * c11.y - c11.x * c12.y;
        var b = c22.x * c11.y - c11.x * c22.y;
        var c = c21.x * c11.y - c11.x * c21.y;
        var d = c11.x * (c10.y - c20.y) + c11.y * (-c10.x + c20.x);
        var e = c22.x * c12.y - c12.x * c22.y;
        var f = c21.x * c12.y - c12.x * c21.y;
        var g = c12.x * (c10.y - c20.y) + c12.y * (-c10.x + c20.x);

        // determinant
        var poly = new Polynomial(-e * e, -2 * e * f, a * b - f * f - 2 * e * g, a * c - 2 * f * g, a * d - g * g);

        var roots = poly.getRoots();

        for (var i = 0; i < roots.length; i++) {
            var s = roots[i];

            if (0 <= s && s <= 1) {
                var xp = new Polynomial(c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x);
                xp.simplify();
                var xRoots = xp.getRoots();
                var yp = new Polynomial(c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y);
                yp.simplify();
                var yRoots = yp.getRoots();

                if (xRoots.length > 0 && yRoots.length > 0) {
                    var TOLERANCE = 1e-4;

                    checkRoots: for (var j = 0; j < xRoots.length; j++) {
                        var xRoot = xRoots[j];

                        if (0 <= xRoot && xRoot <= 1) {
                            for (var k = 0; k < yRoots.length; k++) {
                                if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                                    result.points.push(c22.multiply(s * s).add(c21.multiply(s).add(c20)));
                                    break checkRoots;
                                }
                            }
                        }
                    }
                }
            }
        }

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectBezier2Bezier3
     *
     *  @param {Point2D} a1
     *  @param {Point2D} a2
     *  @param {Point2D} a3
     *  @param {Point2D} b1
     *  @param {Point2D} b2
     *  @param {Point2D} b3
     *  @param {Point2D} b4
     *  @returns {Intersection}
     */
    Intersection.intersectBezier2Bezier3 = function (a1, a2, a3, b1, b2, b3, b4) {
        var a, b, c, d;
        var c12, c11, c10;
        var c23, c22, c21, c20;
        var result = new Intersection("No Intersection");

        a = a2.multiply(-2);
        c12 = a1.add(a.add(a3));

        a = a1.multiply(-2);
        b = a2.multiply(2);
        c11 = a.add(b);

        c10 = new Point2D(a1.x, a1.y);

        a = b1.multiply(-1);
        b = b2.multiply(3);
        c = b3.multiply(-3);
        d = a.add(b.add(c.add(b4)));
        c23 = new Vector2D(d.x, d.y);

        a = b1.multiply(3);
        b = b2.multiply(-6);
        c = b3.multiply(3);
        d = a.add(b.add(c));
        c22 = new Vector2D(d.x, d.y);

        a = b1.multiply(-3);
        b = b2.multiply(3);
        c = a.add(b);
        c21 = new Vector2D(c.x, c.y);

        c20 = new Vector2D(b1.x, b1.y);

        var c10x2 = c10.x * c10.x;
        var c10y2 = c10.y * c10.y;
        var c11x2 = c11.x * c11.x;
        var c11y2 = c11.y * c11.y;
        var c12x2 = c12.x * c12.x;
        var c12y2 = c12.y * c12.y;
        var c20x2 = c20.x * c20.x;
        var c20y2 = c20.y * c20.y;
        var c21x2 = c21.x * c21.x;
        var c21y2 = c21.y * c21.y;
        var c22x2 = c22.x * c22.x;
        var c22y2 = c22.y * c22.y;
        var c23x2 = c23.x * c23.x;
        var c23y2 = c23.y * c23.y;

        var poly = new Polynomial(-2 * c12.x * c12.y * c23.x * c23.y + c12x2 * c23y2 + c12y2 * c23x2, -2 * c12.x * c12.y * c22.x * c23.y - 2 * c12.x * c12.y * c22.y * c23.x + 2 * c12y2 * c22.x * c23.x + 2 * c12x2 * c22.y * c23.y, -2 * c12.x * c21.x * c12.y * c23.y - 2 * c12.x * c12.y * c21.y * c23.x - 2 * c12.x * c12.y * c22.x * c22.y + 2 * c21.x * c12y2 * c23.x + c12y2 * c22x2 + c12x2 * (2 * c21.y * c23.y + c22y2), 2 * c10.x * c12.x * c12.y * c23.y + 2 * c10.y * c12.x * c12.y * c23.x + c11.x * c11.y * c12.x * c23.y + c11.x * c11.y * c12.y * c23.x - 2 * c20.x * c12.x * c12.y * c23.y - 2 * c12.x * c20.y * c12.y * c23.x - 2 * c12.x * c21.x * c12.y * c22.y - 2 * c12.x * c12.y * c21.y * c22.x - 2 * c10.x * c12y2 * c23.x - 2 * c10.y * c12x2 * c23.y + 2 * c20.x * c12y2 * c23.x + 2 * c21.x * c12y2 * c22.x - c11y2 * c12.x * c23.x - c11x2 * c12.y * c23.y + c12x2 * (2 * c20.y * c23.y + 2 * c21.y * c22.y), 2 * c10.x * c12.x * c12.y * c22.y + 2 * c10.y * c12.x * c12.y * c22.x + c11.x * c11.y * c12.x * c22.y + c11.x * c11.y * c12.y * c22.x - 2 * c20.x * c12.x * c12.y * c22.y - 2 * c12.x * c20.y * c12.y * c22.x - 2 * c12.x * c21.x * c12.y * c21.y - 2 * c10.x * c12y2 * c22.x - 2 * c10.y * c12x2 * c22.y + 2 * c20.x * c12y2 * c22.x - c11y2 * c12.x * c22.x - c11x2 * c12.y * c22.y + c21x2 * c12y2 + c12x2 * (2 * c20.y * c22.y + c21y2), 2 * c10.x * c12.x * c12.y * c21.y + 2 * c10.y * c12.x * c21.x * c12.y + c11.x * c11.y * c12.x * c21.y + c11.x * c11.y * c21.x * c12.y - 2 * c20.x * c12.x * c12.y * c21.y - 2 * c12.x * c20.y * c21.x * c12.y - 2 * c10.x * c21.x * c12y2 - 2 * c10.y * c12x2 * c21.y + 2 * c20.x * c21.x * c12y2 - c11y2 * c12.x * c21.x - c11x2 * c12.y * c21.y + 2 * c12x2 * c20.y * c21.y, -2 * c10.x * c10.y * c12.x * c12.y - c10.x * c11.x * c11.y * c12.y - c10.y * c11.x * c11.y * c12.x + 2 * c10.x * c12.x * c20.y * c12.y + 2 * c10.y * c20.x * c12.x * c12.y + c11.x * c20.x * c11.y * c12.y + c11.x * c11.y * c12.x * c20.y - 2 * c20.x * c12.x * c20.y * c12.y - 2 * c10.x * c20.x * c12y2 + c10.x * c11y2 * c12.x + c10.y * c11x2 * c12.y - 2 * c10.y * c12x2 * c20.y - c20.x * c11y2 * c12.x - c11x2 * c20.y * c12.y + c10x2 * c12y2 + c10y2 * c12x2 + c20x2 * c12y2 + c12x2 * c20y2);
        var roots = poly.getRootsInInterval(0, 1);

        for (var i = 0; i < roots.length; i++) {
            var s = roots[i];
            var xRoots = new Polynomial(c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x).getRoots();
            var yRoots = new Polynomial(c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y).getRoots();

            if (xRoots.length > 0 && yRoots.length > 0) {
                var TOLERANCE = 1e-4;

                checkRoots: for (var j = 0; j < xRoots.length; j++) {
                    var xRoot = xRoots[j];

                    if (0 <= xRoot && xRoot <= 1) {
                        for (var k = 0; k < yRoots.length; k++) {
                            if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                                result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                                break checkRoots;
                            }
                        }
                    }
                }
            }
        }

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectBezier2Circle
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @param {Point2D} c
     *  @param {Number} r
     *  @returns {Intersection}
     */
    Intersection.intersectBezier2Circle = function (p1, p2, p3, c, r) {
        return Intersection.intersectBezier2Ellipse(p1, p2, p3, c, r, r);
    };

    /**
     *  intersectBezier2Ellipse
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @param {Point2D} ec
     *  @param {Number} rx
     *  @param {Number} ry
     *  @returns {Intersection}
     */
    Intersection.intersectBezier2Ellipse = function (p1, p2, p3, ec, rx, ry) {
        var a, b; // temporary variables
        var c2, c1, c0; // coefficients of quadratic
        var result = new Intersection("No Intersection");

        a = p2.multiply(-2);
        c2 = p1.add(a.add(p3));

        a = p1.multiply(-2);
        b = p2.multiply(2);
        c1 = a.add(b);

        c0 = new Point2D(p1.x, p1.y);

        var rxrx = rx * rx;
        var ryry = ry * ry;
        var roots = new Polynomial(ryry * c2.x * c2.x + rxrx * c2.y * c2.y, 2 * (ryry * c2.x * c1.x + rxrx * c2.y * c1.y), ryry * (2 * c2.x * c0.x + c1.x * c1.x) + rxrx * (2 * c2.y * c0.y + c1.y * c1.y) - 2 * (ryry * ec.x * c2.x + rxrx * ec.y * c2.y), 2 * (ryry * c1.x * (c0.x - ec.x) + rxrx * c1.y * (c0.y - ec.y)), ryry * (c0.x * c0.x + ec.x * ec.x) + rxrx * (c0.y * c0.y + ec.y * ec.y) - 2 * (ryry * ec.x * c0.x + rxrx * ec.y * c0.y) - rxrx * ryry).getRoots();

        for (var i = 0; i < roots.length; i++) {
            var t = roots[i];

            if (0 <= t && t <= 1) {
                result.points.push(c2.multiply(t * t).add(c1.multiply(t).add(c0)));
            }
        }

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectBezier2Line
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @param {Point2D} a1
     *  @param {Point2D} a2
     *  @returns {Intersection}
     */
    Intersection.intersectBezier2Line = function (p1, p2, p3, a1, a2) {
        var a, b; // temporary variables
        var c2, c1, c0; // coefficients of quadratic
        var cl; // c coefficient for normal form of line
        var n; // normal for normal form of line
        var min = a1.min(a2); // used to determine if point is on line segment
        var max = a1.max(a2); // used to determine if point is on line segment
        var result = new Intersection("No Intersection");

        a = p2.multiply(-2);
        c2 = p1.add(a.add(p3));

        a = p1.multiply(-2);
        b = p2.multiply(2);
        c1 = a.add(b);

        c0 = new Point2D(p1.x, p1.y);

        // Convert line to normal form: ax + by + c = 0
        // Find normal to line: negative inverse of original line's slope
        n = new Vector2D(a1.y - a2.y, a2.x - a1.x);

        // Determine new c coefficient
        cl = a1.x * a2.y - a2.x * a1.y;

        // Transform cubic coefficients to line's coordinate system and find roots
        // of cubic
        roots = new Polynomial(n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots();

        // Any roots in closed interval [0,1] are intersections on Bezier, but
        // might not be on the line segment.
        // Find intersections and calculate point coordinates
        for (var i = 0; i < roots.length; i++) {
            var t = roots[i];

            if (0 <= t && t <= 1) {
                // We're within the Bezier curve
                // Find point on Bezier
                var p4 = p1.lerp(p2, t);
                var p5 = p2.lerp(p3, t);

                var p6 = p4.lerp(p5, t);

                // See if point is on line segment
                // Had to make special cases for vertical and horizontal lines due
                // to slight errors in calculation of p6
                if (a1.x == a2.x) {
                    if (min.y <= p6.y && p6.y <= max.y) {
                        result.status = "Intersection";
                        result.appendPoint(p6);
                    }
                } else if (a1.y == a2.y) {
                    if (min.x <= p6.x && p6.x <= max.x) {
                        result.status = "Intersection";
                        result.appendPoint(p6);
                    }
                } else if (min.x <= p6.x && p6.x <= max.x && min.y <= p6.y && p6.y <= max.y) {
                    result.status = "Intersection";
                    result.appendPoint(p6);
                }
            }
        }

        return result;
    };

    /**
     *  intersectBezier2Polygon
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @param {Array<Point2D>} points
     *  @returns {Intersection}
     */
    Intersection.intersectBezier2Polygon = function (p1, p2, p3, points) {
        return Intersection.intersectBezier2Polyline(p1, p2, p3, closePolygon(points));
    };

    /**
     *  intersectBezier2Polyline
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @param {Array<Point2D>} points
     *  @returns {Intersection}
     */
    Intersection.intersectBezier2Polyline = function (p1, p2, p3, points) {
        var result = new Intersection("No Intersection");
        var length = points.length;

        for (var i = 0; i < length - 1; i++) {
            var a1 = points[i];
            var a2 = points[i + 1];
            var inter = Intersection.intersectBezier2Line(p1, p2, p3, a1, a2);

            result.appendPoints(inter.points);
        }

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectBezier2Rectangle
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @param {Point2D} r1
     *  @param {Point2D} r2
     *  @returns {Intersection}
     */
    Intersection.intersectBezier2Rectangle = function (p1, p2, p3, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);

        var inter1 = Intersection.intersectBezier2Line(p1, p2, p3, min, topRight);
        var inter2 = Intersection.intersectBezier2Line(p1, p2, p3, topRight, max);
        var inter3 = Intersection.intersectBezier2Line(p1, p2, p3, max, bottomLeft);
        var inter4 = Intersection.intersectBezier2Line(p1, p2, p3, bottomLeft, min);

        var result = new Intersection("No Intersection");

        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectBezier3Bezier3
     *
     *  @param {Point2D} a1
     *  @param {Point2D} a2
     *  @param {Point2D} a3
     *  @param {Point2D} a4
     *  @param {Point2D} b1
     *  @param {Point2D} b2
     *  @param {Point2D} b3
     *  @param {Point2D} b4
     *  @returns {Intersection}
     */
    Intersection.intersectBezier3Bezier3 = function (a1, a2, a3, a4, b1, b2, b3, b4) {
        var a, b, c, d; // temporary variables
        var c13, c12, c11, c10; // coefficients of cubic
        var c23, c22, c21, c20; // coefficients of cubic
        var result = new Intersection("No Intersection");

        // Calculate the coefficients of cubic polynomial
        a = a1.multiply(-1);
        b = a2.multiply(3);
        c = a3.multiply(-3);
        d = a.add(b.add(c.add(a4)));
        c13 = new Vector2D(d.x, d.y);

        a = a1.multiply(3);
        b = a2.multiply(-6);
        c = a3.multiply(3);
        d = a.add(b.add(c));
        c12 = new Vector2D(d.x, d.y);

        a = a1.multiply(-3);
        b = a2.multiply(3);
        c = a.add(b);
        c11 = new Vector2D(c.x, c.y);

        c10 = new Vector2D(a1.x, a1.y);

        a = b1.multiply(-1);
        b = b2.multiply(3);
        c = b3.multiply(-3);
        d = a.add(b.add(c.add(b4)));
        c23 = new Vector2D(d.x, d.y);

        a = b1.multiply(3);
        b = b2.multiply(-6);
        c = b3.multiply(3);
        d = a.add(b.add(c));
        c22 = new Vector2D(d.x, d.y);

        a = b1.multiply(-3);
        b = b2.multiply(3);
        c = a.add(b);
        c21 = new Vector2D(c.x, c.y);

        c20 = new Vector2D(b1.x, b1.y);

        // bezout
        var a = c13.x * c12.y - c12.x * c13.y;
        var b = c13.x * c11.y - c11.x * c13.y;
        var c0 = c13.x * c10.y - c10.x * c13.y + c20.x * c13.y - c13.x * c20.y;
        var c1 = c21.x * c13.y - c13.x * c21.y;
        var c2 = c22.x * c13.y - c13.x * c22.y;
        var c3 = c23.x * c13.y - c13.x * c23.y;
        var d = c13.x * c11.y - c11.x * c13.y;
        var e0 = c13.x * c10.y + c12.x * c11.y - c11.x * c12.y - c10.x * c13.y + c20.x * c13.y - c13.x * c20.y;
        var e1 = c21.x * c13.y - c13.x * c21.y;
        var e2 = c22.x * c13.y - c13.x * c22.y;
        var e3 = c23.x * c13.y - c13.x * c23.y;
        var f0 = c12.x * c10.y - c10.x * c12.y + c20.x * c12.y - c12.x * c20.y;
        var f1 = c21.x * c12.y - c12.x * c21.y;
        var f2 = c22.x * c12.y - c12.x * c22.y;
        var f3 = c23.x * c12.y - c12.x * c23.y;
        var g0 = c13.x * c10.y - c10.x * c13.y + c20.x * c13.y - c13.x * c20.y;
        var g1 = c21.x * c13.y - c13.x * c21.y;
        var g2 = c22.x * c13.y - c13.x * c22.y;
        var g3 = c23.x * c13.y - c13.x * c23.y;
        var h0 = c12.x * c10.y - c10.x * c12.y + c20.x * c12.y - c12.x * c20.y;
        var h1 = c21.x * c12.y - c12.x * c21.y;
        var h2 = c22.x * c12.y - c12.x * c22.y;
        var h3 = c23.x * c12.y - c12.x * c23.y;
        var i0 = c11.x * c10.y - c10.x * c11.y + c20.x * c11.y - c11.x * c20.y;
        var i1 = c21.x * c11.y - c11.x * c21.y;
        var i2 = c22.x * c11.y - c11.x * c22.y;
        var i3 = c23.x * c11.y - c11.x * c23.y;

        // determinant
        var poly = new Polynomial(-c3 * e3 * g3, -c3 * e3 * g2 - c3 * e2 * g3 - c2 * e3 * g3, -c3 * e3 * g1 - c3 * e2 * g2 - c2 * e3 * g2 - c3 * e1 * g3 - c2 * e2 * g3 - c1 * e3 * g3, -c3 * e3 * g0 - c3 * e2 * g1 - c2 * e3 * g1 - c3 * e1 * g2 - c2 * e2 * g2 - c1 * e3 * g2 - c3 * e0 * g3 - c2 * e1 * g3 - c1 * e2 * g3 - c0 * e3 * g3 + b * f3 * g3 + c3 * d * h3 - a * f3 * h3 + a * e3 * i3, -c3 * e2 * g0 - c2 * e3 * g0 - c3 * e1 * g1 - c2 * e2 * g1 - c1 * e3 * g1 - c3 * e0 * g2 - c2 * e1 * g2 - c1 * e2 * g2 - c0 * e3 * g2 + b * f3 * g2 - c2 * e0 * g3 - c1 * e1 * g3 - c0 * e2 * g3 + b * f2 * g3 + c3 * d * h2 - a * f3 * h2 + c2 * d * h3 - a * f2 * h3 + a * e3 * i2 + a * e2 * i3, -c3 * e1 * g0 - c2 * e2 * g0 - c1 * e3 * g0 - c3 * e0 * g1 - c2 * e1 * g1 - c1 * e2 * g1 - c0 * e3 * g1 + b * f3 * g1 - c2 * e0 * g2 - c1 * e1 * g2 - c0 * e2 * g2 + b * f2 * g2 - c1 * e0 * g3 - c0 * e1 * g3 + b * f1 * g3 + c3 * d * h1 - a * f3 * h1 + c2 * d * h2 - a * f2 * h2 + c1 * d * h3 - a * f1 * h3 + a * e3 * i1 + a * e2 * i2 + a * e1 * i3, -c3 * e0 * g0 - c2 * e1 * g0 - c1 * e2 * g0 - c0 * e3 * g0 + b * f3 * g0 - c2 * e0 * g1 - c1 * e1 * g1 - c0 * e2 * g1 + b * f2 * g1 - c1 * e0 * g2 - c0 * e1 * g2 + b * f1 * g2 - c0 * e0 * g3 + b * f0 * g3 + c3 * d * h0 - a * f3 * h0 + c2 * d * h1 - a * f2 * h1 + c1 * d * h2 - a * f1 * h2 + c0 * d * h3 - a * f0 * h3 + a * e3 * i0 + a * e2 * i1 + a * e1 * i2 - b * d * i3 + a * e0 * i3, -c2 * e0 * g0 - c1 * e1 * g0 - c0 * e2 * g0 + b * f2 * g0 - c1 * e0 * g1 - c0 * e1 * g1 + b * f1 * g1 - c0 * e0 * g2 + b * f0 * g2 + c2 * d * h0 - a * f2 * h0 + c1 * d * h1 - a * f1 * h1 + c0 * d * h2 - a * f0 * h2 + a * e2 * i0 + a * e1 * i1 - b * d * i2 + a * e0 * i2, -c1 * e0 * g0 - c0 * e1 * g0 + b * f1 * g0 - c0 * e0 * g1 + b * f0 * g1 + c1 * d * h0 - a * f1 * h0 + c0 * d * h1 - a * f0 * h1 + a * e1 * i0 - b * d * i1 + a * e0 * i1, -c0 * e0 * g0 + b * f0 * g0 + c0 * d * h0 - a * f0 * h0 - b * d * i0 + a * e0 * i0);
        poly.simplify();
        var roots = poly.getRootsInInterval(0, 1);

        for (var i = 0; i < roots.length; i++) {
            var s = roots[i];

            var xp = new Polynomial(c13.x, c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x);
            xp.simplify();
            xRoots = xp.getRoots();
            var yp = new Polynomial(c13.y, c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y);
            yp.simplify();
            yRoots = yp.getRoots();

            if (xRoots.length > 0 && yRoots.length > 0) {
                var TOLERANCE = 1e-4;

                checkRoots: for (var j = 0; j < xRoots.length; j++) {
                    var xRoot = xRoots[j];

                    if (0 <= xRoot && xRoot <= 1) {
                        for (var k = 0; k < yRoots.length; k++) {
                            if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                                result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                                break checkRoots;
                            }
                        }
                    }
                }
            }
        }

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectBezier3Circle
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @param {Point2D} p4
     *  @param {Point2D} c
     *  @param {Number} r
     *  @returns {Intersection}
     */
    Intersection.intersectBezier3Circle = function (p1, p2, p3, p4, c, r) {
        return Intersection.intersectBezier3Ellipse(p1, p2, p3, p4, c, r, r);
    };

    /**
     *  intersectBezier3Ellipse
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @param {Point2D} p4
     *  @param {Point2D} ec
     *  @param {Number} rx
     *  @param {Number} ry
     *  @returns {Intersection}
     */
    Intersection.intersectBezier3Ellipse = function (p1, p2, p3, p4, ec, rx, ry) {
        var a, b, c, d; // temporary variables
        var c3, c2, c1, c0; // coefficients of cubic
        var result = new Intersection("No Intersection");

        // Calculate the coefficients of cubic polynomial
        a = p1.multiply(-1);
        b = p2.multiply(3);
        c = p3.multiply(-3);
        d = a.add(b.add(c.add(p4)));
        c3 = new Vector2D(d.x, d.y);

        a = p1.multiply(3);
        b = p2.multiply(-6);
        c = p3.multiply(3);
        d = a.add(b.add(c));
        c2 = new Vector2D(d.x, d.y);

        a = p1.multiply(-3);
        b = p2.multiply(3);
        c = a.add(b);
        c1 = new Vector2D(c.x, c.y);

        c0 = new Vector2D(p1.x, p1.y);

        var rxrx = rx * rx;
        var ryry = ry * ry;
        var poly = new Polynomial(c3.x * c3.x * ryry + c3.y * c3.y * rxrx, 2 * (c3.x * c2.x * ryry + c3.y * c2.y * rxrx), 2 * (c3.x * c1.x * ryry + c3.y * c1.y * rxrx) + c2.x * c2.x * ryry + c2.y * c2.y * rxrx, 2 * c3.x * ryry * (c0.x - ec.x) + 2 * c3.y * rxrx * (c0.y - ec.y) + 2 * (c2.x * c1.x * ryry + c2.y * c1.y * rxrx), 2 * c2.x * ryry * (c0.x - ec.x) + 2 * c2.y * rxrx * (c0.y - ec.y) + c1.x * c1.x * ryry + c1.y * c1.y * rxrx, 2 * c1.x * ryry * (c0.x - ec.x) + 2 * c1.y * rxrx * (c0.y - ec.y), c0.x * c0.x * ryry - 2 * c0.y * ec.y * rxrx - 2 * c0.x * ec.x * ryry + c0.y * c0.y * rxrx + ec.x * ec.x * ryry + ec.y * ec.y * rxrx - rxrx * ryry);
        var roots = poly.getRootsInInterval(0, 1);

        for (var i = 0; i < roots.length; i++) {
            var t = roots[i];

            result.points.push(c3.multiply(t * t * t).add(c2.multiply(t * t).add(c1.multiply(t).add(c0))));
        }

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectBezier3Line
     *
     *  Many thanks to Dan Sunday at SoftSurfer.com.  He gave me a very thorough
     *  sketch of the algorithm used here.  Without his help, I'm not sure when I
     *  would have figured out this intersection problem.
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @param {Point2D} p4
     *  @param {Point2D} a1
     *  @param {Point2D} a2
     *  @returns {Intersection}
     */
    Intersection.intersectBezier3Line = function (p1, p2, p3, p4, a1, a2) {
        var a, b, c, d; // temporary variables
        var c3, c2, c1, c0; // coefficients of cubic
        var cl; // c coefficient for normal form of line
        var n; // normal for normal form of line
        var min = a1.min(a2); // used to determine if point is on line segment
        var max = a1.max(a2); // used to determine if point is on line segment
        var result = new Intersection("No Intersection");

        // Start with Bezier using Bernstein polynomials for weighting functions:
        //     (1-t^3)P1 + 3t(1-t)^2P2 + 3t^2(1-t)P3 + t^3P4
        //
        // Expand and collect terms to form linear combinations of original Bezier
        // controls.  This ends up with a vector cubic in t:
        //     (-P1+3P2-3P3+P4)t^3 + (3P1-6P2+3P3)t^2 + (-3P1+3P2)t + P1
        //             /\                  /\                /\       /\
        //             ||                  ||                ||       ||
        //             c3                  c2                c1       c0

        // Calculate the coefficients
        a = p1.multiply(-1);
        b = p2.multiply(3);
        c = p3.multiply(-3);
        d = a.add(b.add(c.add(p4)));
        c3 = new Vector2D(d.x, d.y);

        a = p1.multiply(3);
        b = p2.multiply(-6);
        c = p3.multiply(3);
        d = a.add(b.add(c));
        c2 = new Vector2D(d.x, d.y);

        a = p1.multiply(-3);
        b = p2.multiply(3);
        c = a.add(b);
        c1 = new Vector2D(c.x, c.y);

        c0 = new Vector2D(p1.x, p1.y);

        // Convert line to normal form: ax + by + c = 0
        // Find normal to line: negative inverse of original line's slope
        n = new Vector2D(a1.y - a2.y, a2.x - a1.x);

        // Determine new c coefficient
        cl = a1.x * a2.y - a2.x * a1.y;

        // ?Rotate each cubic coefficient using line for new coordinate system?
        // Find roots of rotated cubic
        roots = new Polynomial(n.dot(c3), n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots();

        // Any roots in closed interval [0,1] are intersections on Bezier, but
        // might not be on the line segment.
        // Find intersections and calculate point coordinates
        for (var i = 0; i < roots.length; i++) {
            var t = roots[i];

            if (0 <= t && t <= 1) {
                // We're within the Bezier curve
                // Find point on Bezier
                var p5 = p1.lerp(p2, t);
                var p6 = p2.lerp(p3, t);
                var p7 = p3.lerp(p4, t);

                var p8 = p5.lerp(p6, t);
                var p9 = p6.lerp(p7, t);

                var p10 = p8.lerp(p9, t);

                // See if point is on line segment
                // Had to make special cases for vertical and horizontal lines due
                // to slight errors in calculation of p10
                if (a1.x == a2.x) {
                    if (min.y <= p10.y && p10.y <= max.y) {
                        result.status = "Intersection";
                        result.appendPoint(p10);
                    }
                } else if (a1.y == a2.y) {
                    if (min.x <= p10.x && p10.x <= max.x) {
                        result.status = "Intersection";
                        result.appendPoint(p10);
                    }
                } else if (min.x <= p10.x && p10.x <= max.x && min.y <= p10.y && p10.y <= max.y) {
                    result.status = "Intersection";
                    result.appendPoint(p10);
                }
            }
        }

        return result;
    };

    /**
     *  intersectBezier3Polygon
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @param {Point2D} p4
     *  @param {Array<Point2D>} points
     *  @returns {Intersection}
     */
    Intersection.intersectBezier3Polygon = function (p1, p2, p3, p4, points) {
        return this.intersectBezier3Polyline(p1, p2, p3, p4, closePolygon(points));
    };

    /**
     *  intersectBezier3Polyline
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @param {Point2D} p4
     *  @param {Array<Point2D>} points
     *  @returns {Intersection}
     */
    Intersection.intersectBezier3Polyline = function (p1, p2, p3, p4, points) {
        var result = new Intersection("No Intersection");
        var length = points.length;

        for (var i = 0; i < length - 1; i++) {
            var a1 = points[i];
            var a2 = points[i + 1];
            var inter = Intersection.intersectBezier3Line(p1, p2, p3, p4, a1, a2);

            result.appendPoints(inter.points);
        }

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectBezier3Rectangle
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @param {Point2D} p4
     *  @param {Point2D} r1
     *  @param {Point2D} r2
     *  @returns {Intersection}
     */
    Intersection.intersectBezier3Rectangle = function (p1, p2, p3, p4, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);

        var inter1 = Intersection.intersectBezier3Line(p1, p2, p3, p4, min, topRight);
        var inter2 = Intersection.intersectBezier3Line(p1, p2, p3, p4, topRight, max);
        var inter3 = Intersection.intersectBezier3Line(p1, p2, p3, p4, max, bottomLeft);
        var inter4 = Intersection.intersectBezier3Line(p1, p2, p3, p4, bottomLeft, min);

        var result = new Intersection("No Intersection");

        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectCircleCircle
     *
     *  @param {Point2D} c1
     *  @param {Number} r1
     *  @param {Point2D} c2
     *  @param {Number} r2
     *  @returns {Intersection}
     */
    Intersection.intersectCircleCircle = function (c1, r1, c2, r2) {
        var result;

        // Determine minimum and maximum radii where circles can intersect
        var r_max = r1 + r2;
        var r_min = Math.abs(r1 - r2);

        // Determine actual distance between circle circles
        var c_dist = c1.distanceFrom(c2);

        if (c_dist > r_max) {
            result = new Intersection("Outside");
        } else if (c_dist < r_min) {
            result = new Intersection("Inside");
        } else {
            result = new Intersection("Intersection");

            var a = (r1 * r1 - r2 * r2 + c_dist * c_dist) / (2 * c_dist);
            var h = Math.sqrt(r1 * r1 - a * a);
            var p = c1.lerp(c2, a / c_dist);
            var b = h / c_dist;

            result.points.push(new Point2D(p.x - b * (c2.y - c1.y), p.y + b * (c2.x - c1.x)));
            result.points.push(new Point2D(p.x + b * (c2.y - c1.y), p.y - b * (c2.x - c1.x)));
        }

        return result;
    };

    /**
     *  intersectCircleEllipse
     *
     *  @param {Point2D} cc
     *  @param {Number} r
     *  @param {Point2D} ec
     *  @param {Number} rx
     *  @param {Number} ry
     *  @returns {Intersection}
     */
    Intersection.intersectCircleEllipse = function (cc, r, ec, rx, ry) {
        return Intersection.intersectEllipseEllipse(cc, r, r, ec, rx, ry);
    };

    /**
     *  intersectCircleLine
     *
     *  @param {Point2D} c
     *  @param {Number} r
     *  @param {Point2D} a1
     *  @param {Point2D} a2
     *  @returns {Intersection}
     */
    Intersection.intersectCircleLine = function (c, r, a1, a2) {
        var result;
        var a = (a2.x - a1.x) * (a2.x - a1.x) + (a2.y - a1.y) * (a2.y - a1.y);
        var b = 2 * ((a2.x - a1.x) * (a1.x - c.x) + (a2.y - a1.y) * (a1.y - c.y));
        var cc = c.x * c.x + c.y * c.y + a1.x * a1.x + a1.y * a1.y - 2 * (c.x * a1.x + c.y * a1.y) - r * r;
        var deter = b * b - 4 * a * cc;

        if (deter < 0) {
            result = new Intersection("Outside");
        } else if (deter == 0) {
            result = new Intersection("Tangent");
            // NOTE: should calculate this point
        } else {
            var e = Math.sqrt(deter);
            var u1 = (-b + e) / (2 * a);
            var u2 = (-b - e) / (2 * a);

            if ((u1 < 0 || u1 > 1) && (u2 < 0 || u2 > 1)) {
                if (u1 < 0 && u2 < 0 || u1 > 1 && u2 > 1) {
                    result = new Intersection("Outside");
                } else {
                    result = new Intersection("Inside");
                }
            } else {
                result = new Intersection("Intersection");

                if (0 <= u1 && u1 <= 1) {
                    result.points.push(a1.lerp(a2, u1));
                }

                if (0 <= u2 && u2 <= 1) {
                    result.points.push(a1.lerp(a2, u2));
                }
            }
        }

        return result;
    };

    /**
     *  intersectCirclePolygon
     *
     *  @param {Point2D} c
     *  @param {Number} r
     *  @param {Array<Point2D>} points
     *  @returns {Intersection}
     */
    Intersection.intersectCirclePolygon = function (c, r, points) {
        return this.intersectCirclePolyline(c, r, closePolygon(points));
    };

    /**
     *  intersectCirclePolyline
     *
     *  @param {Point2D} c
     *  @param {Number} r
     *  @param {Array<Point2D>} points
     *  @returns {Intersection}
     */
    Intersection.intersectCirclePolyline = function (c, r, points) {
        var result = new Intersection("No Intersection");
        var length = points.length;
        var inter;

        for (var i = 0; i < length - 1; i++) {
            var a1 = points[i];
            var a2 = points[i + 1];

            inter = Intersection.intersectCircleLine(c, r, a1, a2);
            result.appendPoints(inter.points);
        }

        if (result.points.length > 0) {
            result.status = "Intersection";
        } else {
            result.status = inter.status;
        }

        return result;
    };

    /**
     *  intersectCircleRectangle
     *
     *  @param {Point2D} c
     *  @param {Number} r
     *  @param {Point2D} r1
     *  @param {Point2D} r2
     *  @returns {Intersection}
     */
    Intersection.intersectCircleRectangle = function (c, r, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);

        var inter1 = Intersection.intersectCircleLine(c, r, min, topRight);
        var inter2 = Intersection.intersectCircleLine(c, r, topRight, max);
        var inter3 = Intersection.intersectCircleLine(c, r, max, bottomLeft);
        var inter4 = Intersection.intersectCircleLine(c, r, bottomLeft, min);

        var result = new Intersection("No Intersection");

        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
            result.status = "Intersection";
        } else {
            result.status = inter1.status;
        }

        return result;
    };

    /**
     *  intersectEllipseEllipse
     *
     *  This code is based on MgcIntr2DElpElp.cpp written by David Eberly.  His
     *  code along with many other excellent examples are avaiable at his site:
     *  http://www.magic-software.com
     *
     *  NOTE: Rotation will need to be added to this function
     *
     *  @param {Point2D} c1
     *  @param {Number} rx1
     *  @param {Number} ry1
     *  @param {Point2D} c2
     *  @param {Number} rx2
     *  @param {Number} ry2
     *  @returns {Intersection}
     */
    Intersection.intersectEllipseEllipse = function (c1, rx1, ry1, c2, rx2, ry2) {
        var a = [ry1 * ry1, 0, rx1 * rx1, -2 * ry1 * ry1 * c1.x, -2 * rx1 * rx1 * c1.y, ry1 * ry1 * c1.x * c1.x + rx1 * rx1 * c1.y * c1.y - rx1 * rx1 * ry1 * ry1];
        var b = [ry2 * ry2, 0, rx2 * rx2, -2 * ry2 * ry2 * c2.x, -2 * rx2 * rx2 * c2.y, ry2 * ry2 * c2.x * c2.x + rx2 * rx2 * c2.y * c2.y - rx2 * rx2 * ry2 * ry2];

        var yPoly = Intersection.bezout(a, b);
        var yRoots = yPoly.getRoots();
        var epsilon = 1e-3;
        var norm0 = (a[0] * a[0] + 2 * a[1] * a[1] + a[2] * a[2]) * epsilon;
        var norm1 = (b[0] * b[0] + 2 * b[1] * b[1] + b[2] * b[2]) * epsilon;
        var result = new Intersection("No Intersection");

        for (var y = 0; y < yRoots.length; y++) {
            var xPoly = new Polynomial(a[0], a[3] + yRoots[y] * a[1], a[5] + yRoots[y] * (a[4] + yRoots[y] * a[2]));
            var xRoots = xPoly.getRoots();

            for (var x = 0; x < xRoots.length; x++) {
                var test = (a[0] * xRoots[x] + a[1] * yRoots[y] + a[3]) * xRoots[x] + (a[2] * yRoots[y] + a[4]) * yRoots[y] + a[5];
                if (Math.abs(test) < norm0) {
                    test = (b[0] * xRoots[x] + b[1] * yRoots[y] + b[3]) * xRoots[x] + (b[2] * yRoots[y] + b[4]) * yRoots[y] + b[5];
                    if (Math.abs(test) < norm1) {
                        result.appendPoint(new Point2D(xRoots[x], yRoots[y]));
                    }
                }
            }
        }

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectEllipseLine
     *
     *  NOTE: Rotation will need to be added to this function
     *
     *  @param {Point2D} c
     *  @param {Number} rx
     *  @param {Number} ry
     *  @param {Point2D} a1
     *  @param {Point2D} a2
     *  @returns {Intersection}
     */
    Intersection.intersectEllipseLine = function (c, rx, ry, a1, a2) {
        var result;
        var origin = new Vector2D(a1.x, a1.y);
        var dir = Vector2D.fromPoints(a1, a2);
        var center = new Vector2D(c.x, c.y);
        var diff = origin.subtract(center);
        var mDir = new Vector2D(dir.x / (rx * rx), dir.y / (ry * ry));
        var mDiff = new Vector2D(diff.x / (rx * rx), diff.y / (ry * ry));

        var a = dir.dot(mDir);
        var b = dir.dot(mDiff);
        var c = diff.dot(mDiff) - 1.0;
        var d = b * b - a * c;

        if (d < 0) {
            result = new Intersection("Outside");
        } else if (d > 0) {
            var root = Math.sqrt(d);
            var t_a = (-b - root) / a;
            var t_b = (-b + root) / a;

            if ((t_a < 0 || 1 < t_a) && (t_b < 0 || 1 < t_b)) {
                if (t_a < 0 && t_b < 0 || t_a > 1 && t_b > 1) {
                    result = new Intersection("Outside");
                } else {
                    result = new Intersection("Inside");
                }
            } else {
                result = new Intersection("Intersection");
                if (0 <= t_a && t_a <= 1) {
                    result.appendPoint(a1.lerp(a2, t_a));
                }
                if (0 <= t_b && t_b <= 1) {
                    result.appendPoint(a1.lerp(a2, t_b));
                }
            }
        } else {
            var t = -b / a;

            if (0 <= t && t <= 1) {
                result = new Intersection("Intersection");
                result.appendPoint(a1.lerp(a2, t));
            } else {
                result = new Intersection("Outside");
            }
        }

        return result;
    };

    /**
     *  intersectEllipsePolygon
     *
     *  @param {Point2D} c
     *  @param {Number} rx
     *  @param {Number} ry
     *  @param {Array<Point2D>} c2
     *  @returns {Intersection}
     */
    Intersection.intersectEllipsePolygon = function (c, rx, ry, points) {
        return this.intersectEllipsePolyline(c, rx, ry, closePolygon(points));
    };

    /**
     *  intersectEllipsePolyline
     *
     *  @param {Point2D} c
     *  @param {Number} rx
     *  @param {Number} ry
     *  @param {Array<Point2D>} c2
     *  @returns {Intersection}
     */
    Intersection.intersectEllipsePolyline = function (c, rx, ry, points) {
        var result = new Intersection("No Intersection");
        var length = points.length;

        for (var i = 0; i < length - 1; i++) {
            var b1 = points[i];
            var b2 = points[i + 1];
            var inter = Intersection.intersectEllipseLine(c, rx, ry, b1, b2);

            result.appendPoints(inter.points);
        }

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectEllipseRectangle
     *
     *  @param {Point2D} c
     *  @param {Number} rx
     *  @param {Number} ry
     *  @param {Point2D} r1
     *  @param {Point2D} r2
     *  @returns {Intersection}
     */
    Intersection.intersectEllipseRectangle = function (c, rx, ry, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);

        var inter1 = Intersection.intersectEllipseLine(c, rx, ry, min, topRight);
        var inter2 = Intersection.intersectEllipseLine(c, rx, ry, topRight, max);
        var inter3 = Intersection.intersectEllipseLine(c, rx, ry, max, bottomLeft);
        var inter4 = Intersection.intersectEllipseLine(c, rx, ry, bottomLeft, min);

        var result = new Intersection("No Intersection");

        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectLineLine
     *
     *  @param {Point2D} a1
     *  @param {Point2D} a2
     *  @param {Point2D} b1
     *  @param {Point2D} b2
     *  @returns {Intersection}
     */
    Intersection.intersectLineLine = function (a1, a2, b1, b2) {
        var result;

        var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
        var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
        var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);

        if (u_b != 0) {
            var ua = ua_t / u_b;
            var ub = ub_t / u_b;

            if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                result = new Intersection("Intersection");
                result.points.push(new Point2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
            } else {
                result = new Intersection("No Intersection");
            }
        } else {
            if (ua_t == 0 || ub_t == 0) {
                result = new Intersection("Coincident");
            } else {
                result = new Intersection("Parallel");
            }
        }

        return result;
    };

    /**
     *  intersectLinePolygon
     *
     *  @param {Point2D} a1
     *  @param {Point2D} a2
     *  @param {Array<Point2D>} points
     *  @returns {Intersection}
     */
    Intersection.intersectLinePolygon = function (a1, a2, points) {
        return this.intersectLinePolyline(a1, a2, closePolygon(points));
    };

    /**
     *  intersectLinePolyline
     *
     *  @param {Point2D} a1
     *  @param {Point2D} a2
     *  @param {Array<Point2D>} points
     *  @returns {Intersection}
     */
    Intersection.intersectLinePolyline = function (a1, a2, points) {
        var result = new Intersection("No Intersection");
        var length = points.length;

        for (var i = 0; i < length - 1; i++) {
            var b1 = points[i];
            var b2 = points[i + 1];
            var inter = Intersection.intersectLineLine(a1, a2, b1, b2);

            result.appendPoints(inter.points);
        }

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectLineRectangle
     *
     *  @param {Point2D} a1
     *  @param {Point2D} a2
     *  @param {Point2D} r1
     *  @param {Point2D} r2
     *  @returns {Intersection}
     */
    Intersection.intersectLineRectangle = function (a1, a2, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);

        var inter1 = Intersection.intersectLineLine(min, topRight, a1, a2);
        var inter2 = Intersection.intersectLineLine(topRight, max, a1, a2);
        var inter3 = Intersection.intersectLineLine(max, bottomLeft, a1, a2);
        var inter4 = Intersection.intersectLineLine(bottomLeft, min, a1, a2);

        var result = new Intersection("No Intersection");

        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectPolygonPolygon
     *
     *  @param {Array<Point2D>} points1
     *  @param {Array<Point2D>} points2
     *  @returns {Intersection}
     */
    Intersection.intersectPolygonPolygon = function (points1, points2) {
        return this.intersectPolylinePolyline(closePolygon(points1), closePolygon(points2));
    };

    /**
     *  intersectPolygonPolyline
     *
     *  @param {Array<Point2D>} points1
     *  @param {Array<Point2D>} points2
     *  @returns {Intersection}
     */
    Intersection.intersectPolygonPolyline = function (points1, points2) {
        return this.intersectPolylinePolyline(closePolygon(points1), points2);
    };

    /**
     *  intersectPolygonRectangle
     *
     *  @param {Array<Point2D>} points
     *  @param {Point2D} r1
     *  @param {Point2D} r2
     *  @returns {Intersection}
     */
    Intersection.intersectPolygonRectangle = function (points, r1, r2) {
        return this.intersectPolylineRectangle(closePolygon(points), r1, r2);
    };

    /**
     *  intersectPolylinePolyline
     *
     *  @param {Array<Point2D>} points1
     *  @param {Array<Point2D>} points2
     *  @returns {Intersection}
     */
    Intersection.intersectPolylinePolyline = function (points1, points2) {
        var result = new Intersection("No Intersection");
        var length = points1.length;

        for (var i = 0; i < length - 1; i++) {
            var a1 = points1[i];
            var a2 = points1[i + 1];
            var inter = Intersection.intersectLinePolyline(a1, a2, points2);

            result.appendPoints(inter.points);
        }

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectPolylineRectangle
     *
     *  @param {Array<Point2D>} points
     *  @param {Point2D} r1
     *  @param {Point2D} r2
     *  @returns {Intersection}
     */
    Intersection.intersectPolylineRectangle = function (points, r1, r2) {
        var min = r1.min(r2);
        var max = r1.max(r2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);

        var inter1 = Intersection.intersectLinePolyline(min, topRight, points);
        var inter2 = Intersection.intersectLinePolyline(topRight, max, points);
        var inter3 = Intersection.intersectLinePolyline(max, bottomLeft, points);
        var inter4 = Intersection.intersectLinePolyline(bottomLeft, min, points);

        var result = new Intersection("No Intersection");

        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectRectangleRectangle
     *
     *  @param {Point2D} a1
     *  @param {Point2D} a2
     *  @param {Point2D} b1
     *  @param {Point2D} b2
     *  @returns {Intersection}
     */
    Intersection.intersectRectangleRectangle = function (a1, a2, b1, b2) {
        var min = a1.min(a2);
        var max = a1.max(a2);
        var topRight = new Point2D(max.x, min.y);
        var bottomLeft = new Point2D(min.x, max.y);

        var inter1 = Intersection.intersectLineRectangle(min, topRight, b1, b2);
        var inter2 = Intersection.intersectLineRectangle(topRight, max, b1, b2);
        var inter3 = Intersection.intersectLineRectangle(max, bottomLeft, b1, b2);
        var inter4 = Intersection.intersectLineRectangle(bottomLeft, min, b1, b2);

        var result = new Intersection("No Intersection");

        result.appendPoints(inter1.points);
        result.appendPoints(inter2.points);
        result.appendPoints(inter3.points);
        result.appendPoints(inter4.points);

        if (result.points.length > 0) {
            result.status = "Intersection";
        }

        return result;
    };

    /**
     *  intersectRayRay
     *
     *  @param {Point2D} a1
     *  @param {Point2D} a2
     *  @param {Point2D} b1
     *  @param {Point2D} b2
     *  @returns {Intersection}
     */
    Intersection.intersectRayRay = function (a1, a2, b1, b2) {
        var result;

        var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
        var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
        var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);

        if (u_b != 0) {
            var ua = ua_t / u_b;

            result = new Intersection("Intersection");
            result.points.push(new Point2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
        } else {
            if (ua_t == 0 || ub_t == 0) {
                result = new Intersection("Coincident");
            } else {
                result = new Intersection("Parallel");
            }
        }

        return result;
    };

    /**
     *  bezout
     *
     *  This code is based on MgcIntr2DElpElp.cpp written by David Eberly.  His
     *  code along with many other excellent examples are avaiable at his site:
     *  http://www.magic-software.com
     *
     *  @param {Array<Point2D>} e1
     *  @param {Array<Point2D>} e2
     *  @returns {Polynomial}
     */
    Intersection.bezout = function (e1, e2) {
        var AB = e1[0] * e2[1] - e2[0] * e1[1];
        var AC = e1[0] * e2[2] - e2[0] * e1[2];
        var AD = e1[0] * e2[3] - e2[0] * e1[3];
        var AE = e1[0] * e2[4] - e2[0] * e1[4];
        var AF = e1[0] * e2[5] - e2[0] * e1[5];
        var BC = e1[1] * e2[2] - e2[1] * e1[2];
        var BE = e1[1] * e2[4] - e2[1] * e1[4];
        var BF = e1[1] * e2[5] - e2[1] * e1[5];
        var CD = e1[2] * e2[3] - e2[2] * e1[3];
        var DE = e1[3] * e2[4] - e2[3] * e1[4];
        var DF = e1[3] * e2[5] - e2[3] * e1[5];
        var BFpDE = BF + DE;
        var BEmCD = BE - CD;

        return new Polynomial(AB * BC - AC * AC, AB * BEmCD + AD * BC - 2 * AC * AE, AB * BFpDE + AD * BEmCD - AE * AE - 2 * AC * AF, AB * DF + AD * BFpDE - 2 * AE * AF, AD * DF - AF * AF);
    };

    {
        module.exports = Intersection;
    }
});

var IntersectionArgs_1 = createCommonjsModule(function (module) {
  /**
   *
   *   IntersectionArgs.js
   *
   *   @copyright 2002, 2017 Kevin Lindsey
   *
   */

  /**
   *  IntersectionArgs
   *
   *  @param {String} name
   *  @param {Array<Point2D} args
   *  @returns {IntersectionArgs}
   */
  function IntersectionArgs(name, args) {
    this.init(name, args);
  }

  /**
   *  init
   *
   *  @param {String} name
   *  @param {Array<Point2D>} args
   */
  IntersectionArgs.prototype.init = function (name, args) {
    this.name = name;
    this.args = args;
  };

  {
    module.exports = IntersectionArgs;
  }
});

var Shapes_1 = createCommonjsModule(function (module) {
    /**
     *  Shapes
     *
     *  @copyright 2017, Kevin Lindsey
     */

    {
        var Point2D = kldAffine.Point2D,
            IntersectionArgs = IntersectionArgs_1;
    }

    var Shapes = {};

    /**
     *  quadraticBezier
     *
     *  @param {Number} p1x
     *  @param {Number} p1y
     *  @param {Number} p2x
     *  @param {Number} p2y
     *  @param {Number} p3x
     *  @param {Number} p3y
     *  @returns {IntersectionArgs}
     */
    Shapes.quadraticBezier = function (p1x, p1y, p2x, p2y, p3x, p3y) {
        return new IntersectionArgs("Bezier2", [new Point2D(p1x, p1y), new Point2D(p2x, p2y), new Point2D(p3x, p3y)]);
    };

    /**
     *  cubicBezier
     *
     *  @param {Number} p1x
     *  @param {Number} p1y
     *  @param {Number} p2x
     *  @param {Number} p2y
     *  @param {Number} p3x
     *  @param {Number} p3y
     *  @param {Number} p4x
     *  @param {Number} p4y
     *  @returns {IntersectionArgs}
     */
    Shapes.cubicBezier = function (p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
        return new IntersectionArgs("Bezier3", [new Point2D(p1x, p1y), new Point2D(p2x, p2y), new Point2D(p3x, p3y), new Point2D(p4x, p4y)]);
    };

    /**
     *  circle
     *
     *  @param {Number} centerX
     *  @param {Number} centerY
     *  @param {Number} radius
     *  @returns {IntersectionArgs}
     */
    Shapes.circle = function (centerX, centerY, radius) {
        return new IntersectionArgs("Circle", [new Point2D(centerX, centerY), radius]);
    };

    /**
     *  ellipse
     *
     *  @param {Number} centerX
     *  @param {Number} centerY
     *  @param {Number} radiusX
     *  @param {Number} radiusY
     *  @returns {IntersectionArgs}
     */
    Shapes.ellipse = function (centerX, centerY, radiusX, radiusY) {
        return new IntersectionArgs("Ellipse", [new Point2D(centerX, centerY), radiusX, radiusY]);
    };

    /**
     *  line
     *
     *  @param {Number} p1x
     *  @param {Number} p1y
     *  @param {Number} p2x
     *  @param {Number} p2y
     *  @returns {IntersectionArgs}
     */
    Shapes.line = function (p1x, p1y, p2x, p2y) {
        return new IntersectionArgs("Line", [new Point2D(p1x, p1y), new Point2D(p2x, p2y)]);
    };

    /**
     *  path
     *
     *  @param {Array<Shapes}> segments
     *  @returns {IntersectionArgs}
     */
    Shapes.path = function (segments) {
        return new IntersectionArgs("Path", segments);
    };

    /**
     *  polygon
     *
     *  @param {Array<Number}> coords
     *  @returns {IntersectionArgs}
     */
    Shapes.polygon = function (coords) {
        var points = [];

        for (var i = 0; i < coords.length; i += 2) {
            points.push(new Point2D(coords[i], coords[i + 1]));
        }

        return new IntersectionArgs("Polygon", [points]);
    };

    /**
     *  polyline
     *
     *  @param {Array<Number}> coords
     *  @returns {IntersectionArgs}
     */
    Shapes.polyline = function (coords) {
        var points = [];

        for (var i = 0; i < coords.length; i += 2) {
            points.push(new Point2D(coords[i], coords[i + 1]));
        }

        return new IntersectionArgs("Polyline", [points]);
    };

    /**
     *  rectangle
     *
     *  @param {Number} x
     *  @param {Number} y
     *  @param {Number} width
     *  @param {Number} height
     *  @returns {IntersectionArgs}
     */
    Shapes.rectangle = function (x, y, width, height) {
        return new IntersectionArgs("Rectangle", [new Point2D(x, y), new Point2D(x + width, y + height)]);
    };

    {
        module.exports = Shapes;
    }
});

var AffineShapes_1 = createCommonjsModule(function (module) {
    /**
     *  AffineShapes
     *
     *  @copyright 2017, Kevin Lindsey
     */

    {
        var Point2D = kldAffine.Point2D,
            IntersectionArgs = IntersectionArgs_1;
    }

    var AffineShapes = {};

    /**
     *  quadraticBezier
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @returns {IntersectionArgs}
     */
    AffineShapes.quadraticBezier = function (p1, p2, p3) {
        return new IntersectionArgs("Bezier2", [p1, p2, p3]);
    };

    /**
     *  cubicBezier
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @param {Point2D} p3
     *  @param {Point2D} p4
     *  @returns {IntersectionArgs}
     */
    AffineShapes.cubicBezier = function (p1, p2, p3, p4) {
        return new IntersectionArgs("Bezier3", [p1, p2, p3, p4]);
    };

    /**
     *  circle
     *
     *  @param {Point2D} center
     *  @param {Number} radius
     *  @returns {IntersectionArgs}
     */
    AffineShapes.circle = function (center, radius) {
        return new IntersectionArgs("Circle", [center, radius]);
    };

    /**
     *  ellipse
     *
     *  @param {Point2D} center
     *  @param {Number} radiusX
     *  @param {Number} radiusY
     *  @returns {IntersectionArgs}
     */
    AffineShapes.ellipse = function (center, radiusX, radiusY) {
        return new IntersectionArgs("Ellipse", [center, radiusX, radiusY]);
    };

    /**
     *  line
     *
     *  @param {Point2D} p1
     *  @param {Point2D} p2
     *  @returns {IntersectionArgs}
     */
    AffineShapes.line = function (p1, p2) {
        return new IntersectionArgs("Line", [p1, p2]);
    };

    /**
     *  path
     *
     *  @param {Array<AffineShapes}> segments
     *  @returns {IntersectionArgs}
     */
    AffineShapes.path = function (segments) {
        return new IntersectionArgs("Path", [segments]);
    };

    /**
     *  polygon
     *
     *  @param {Array<Point2D}> points
     *  @returns {IntersectionArgs}
     */
    AffineShapes.polygon = function (points) {
        return new IntersectionArgs("Polygon", [points]);
    };

    /**
     *  polyline
     *
     *  @param {Array<Point2D}> points
     *  @returns {IntersectionArgs}
     */
    AffineShapes.polyline = function (points) {
        return new IntersectionArgs("Polyline", [points]);
    };

    /**
     *  rectangle
     *
     *  @param {Point2D} topLeft
     *  @param {Vector2D} size
     *  @returns {IntersectionArgs}
     */
    AffineShapes.rectangle = function (topLeft, size) {
        return new IntersectionArgs("Rectangle", [topLeft, topLeft.add(size)]);
    };

    {
        module.exports = AffineShapes;
    }
});

var IntersectionQuery_1 = createCommonjsModule(function (module) {
    /**
     *
     *  IntersectionQuery.js
     *
     *  @copyright 2017 Kevin Lindsey
     *
     */

    {
        var Vector2D = kldAffine.Vector2D;
    }

    /**
     *
     */
    var IntersectionQuery = {};

    /**
     *  pointInCircle
     *
     *  @param {Point2D} point
     *  @param {Point2D} center
     *  @param {Number} radius
     *  @return {Boolean}
     */
    IntersectionQuery.pointInCircle = function (point, center, radius) {
        var v = Vector2D.fromPoints(center, point);

        return v.length() <= radius;
    };

    /**
     *  pointInEllipse
     *
     *  @param {Point2D} point
     *  @param {Point2D} center
     *  @param {Number} radiusX
     *  @param {Number} radiusY
     *  @return {Boolean}
     */
    IntersectionQuery.pointInEllipse = function (point, center, radiusX, radiusY) {
        var len = point.subtract(center);

        return len.x * len.x / (radiusX * radiusX) + len.y * len.y / (radiusY * radiusY) <= 1;
    };

    /**
     *  pointInPolyline
     *
     *  @param {Point2D} point
     *  @param {Array<Point2D>} points
     */
    IntersectionQuery.pointInPolyline = function (point, points) {
        var length = points.length;
        var counter = 0;
        var x_inter;

        var p1 = points[0];

        for (var i = 1; i <= length; i++) {
            var p2 = points[i % length];
            var minY = Math.min(p1.y, p2.y);
            var maxY = Math.max(p1.y, p2.y);
            var maxX = Math.max(p1.x, p2.x);

            if (p1.y != p2.y && minY < point.y && point.y <= maxY && point.x <= maxX) {
                x_inter = (point.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;

                if (p1.x == p2.x || point.x <= x_inter) {
                    counter++;
                }
            }

            p1 = p2;
        }

        return counter % 2 == 1;
    };

    /**
     *  pointInPolyline
     *
     *  @param {Point2D} point
     *  @param {Array<Point2D>} points
     */
    IntersectionQuery.pointInPolygon = IntersectionQuery.pointInPolyline;

    /**
     *  pointInRectangle
     *
     *  @param {Point2D} point
     *  @param {Point2D} topLeft
     *  @param {Point2D} bottomRight
     *  @return {Boolean}
     */
    IntersectionQuery.pointInRectangle = function (point, topLeft, bottomRight) {
        return topLeft.x <= point.x && point.x < bottomRight.x && topLeft.y <= point.y && point.y < bottomRight.y;
    };

    {
        module.exports = IntersectionQuery;
    }
});

// expose module classes
var Intersection = Intersection_1;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var lodash_isequal = createCommonjsModule(function (module, exports) {
  /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright JS Foundation and other contributors <https://js.foundation/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = function () {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function (value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function (value) {
      result[++index] = value;
    });
    return result;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
      _Symbol = root.Symbol,
      Uint8Array = root.Uint8Array,
      propertyIsEnumerable = objectProto.propertyIsEnumerable,
      splice = arrayProto.splice,
      symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols,
      nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
      nativeKeys = overArg(Object.keys, Object);

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView'),
      Map = getNative(root, 'Map'),
      Promise = getNative(root, 'Promise'),
      Set = getNative(root, 'Set'),
      WeakMap = getNative(root, 'WeakMap'),
      nativeCreate = getNative(Object, 'create');

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map),
      promiseCtorString = toSource(Promise),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap);

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash(),
      'map': new (Map || ListCache)(),
      'string': new Hash()
    };
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
      // Safari 9 has enumerable `arguments.length` in strict mode.
      key == 'length' ||
      // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == 'offset' || key == 'parent') ||
      // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
      // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = objIsArr ? arrayTag : getTag(object),
        othTag = othIsArr ? arrayTag : getTag(other);

    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;

    var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;

        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1,
        result = true,
        seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

    stack.set(array, other);
    stack.set(other, array);

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!arraySome(other, function (othValue, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;

      case boolTag:
      case dateTag:
      case numberTag:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other);

      case errorTag:
        return object.name == other.name && object.message == other.message;

      case regexpTag:
      case stringTag:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == other + '';

      case mapTag:
        var convert = mapToArray;

      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert || (convert = setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        objProps = getAllKeys(object),
        objLength = objProps.length,
        othProps = getAllKeys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);

    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function (symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function getTag(value) {
      var result = baseGetTag(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

    return value === proto;
  }

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(function () {
    return arguments;
  }()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  };

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  /**
   * Performs a deep comparison between two values to determine if they are
   * equivalent.
   *
   * **Note:** This method supports comparing arrays, array buffers, booleans,
   * date objects, error objects, maps, numbers, `Object` objects, regexes,
   * sets, strings, symbols, and typed arrays. `Object` objects are compared
   * by their own, not inherited, enumerable properties. Functions and DOM
   * nodes are compared by strict equality, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.isEqual(object, other);
   * // => true
   *
   * object === other;
   * // => false
   */
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    return value != null && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
  }

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  module.exports = isEqual;
});

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = _typeof$1(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof$1(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var _Symbol = root.Symbol;
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
var splice = arrayProto.splice;
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');
var Set = getNative(root, 'Set');
var nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }
  outer: while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    } else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function (values) {
  return new Set(values);
};

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof$1(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
}

/**
 * This method is like `_.union` except that it accepts `comparator` which
 * is invoked to compare elements of `arrays`. Result values are chosen from
 * the first array in which the value occurs. The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.unionWith(objects, others, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */
var unionWith = baseRest(function (arrays) {
  var comparator = last(arrays);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
});

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof$1(value);
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof$1(value)) == 'object';
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

var lodash_unionwith = unionWith;

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var funcTag$1 = '[object Function]';
var genTag$1 = '[object GeneratorFunction]';

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = _typeof$2(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf$1 = (typeof self === 'undefined' ? 'undefined' : _typeof$2(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush$1(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var _Symbol$1 = root$1.Symbol;
var propertyIsEnumerable$1 = objectProto$1.propertyIsEnumerable;
var spreadableSymbol$1 = _Symbol$1 ? _Symbol$1.isConcatSpreadable : undefined;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable$1);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush$1(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable$1(value) {
  return isArray$1(value) || isArguments$1(value) || !!(spreadableSymbol$1 && value && value[spreadableSymbol$1]);
}

/**
 * Recursively flattens `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */
function flattenDeep(array) {
  var length = array ? array.length : 0;
  return length ? baseFlatten$1(array, INFINITY$1) : [];
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments$1(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject$1(value) && hasOwnProperty$1.call(value, 'callee') && (!propertyIsEnumerable$1.call(value, 'callee') || objectToString$1.call(value) == argsTag$1);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$1(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject$1(value) {
  return isObjectLike$1(value) && isArrayLike$1(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject$1(value) ? objectToString$1.call(value) : '';
  return tag == funcTag$1 || tag == genTag$1;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$1(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof$2(value);
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof$2(value)) == 'object';
}

var lodash_flattendeep = flattenDeep;

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var uid = 'geosplit@cXiaof';
var options = {
    deleteTargets: true,
    colorHit: '#ffa400',
    colorChosen: '#00bcd4'
};

var GeoSplit = function (_maptalks$Class) {
    _inherits(GeoSplit, _maptalks$Class);

    function GeoSplit(options) {
        _classCallCheck(this, GeoSplit);

        var _this = _possibleConstructorReturn(this, _maptalks$Class.call(this, options));

        _this._layerName = '' + maptalks.INTERNAL_LAYER_PREFIX + uid;
        _this._layerTMP = '' + maptalks.INTERNAL_LAYER_PREFIX + uid + '_temp';
        _this._chooseGeos = [];
        return _this;
    }

    GeoSplit.prototype.split = function split(geometry, targets) {
        if (geometry instanceof maptalks.Polygon || geometry instanceof maptalks.LineString) {
            this._initialTaskWithGeo(geometry);
            if (targets instanceof maptalks.LineString) targets = [targets];
            if (targets instanceof Array && targets.length > 0) {
                this._splitWithTargets(targets);
                var result = this._result;
                this.remove();
                return result;
            }
            return this;
        }
    };

    GeoSplit.prototype.submit = function submit() {
        var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
            return false;
        };

        this._splitWithTargets();
        callback(this._result, this._deals);
        this.remove();
    };

    GeoSplit.prototype.cancel = function cancel() {
        this.remove();
    };

    GeoSplit.prototype.remove = function remove() {
        if (this._tmpLayer) this._tmpLayer.remove();
        if (this._chooseLayer) this._chooseLayer.remove();
        this._chooseGeos = [];
        this._offMapEvents();
        delete this._result;
        delete this._deals;
        delete this._tmpLayer;
        delete this._chooseLayer;
        delete this._mousemove;
        delete this._click;
        delete this._dblclick;
    };

    GeoSplit.prototype._initialTaskWithGeo = function _initialTaskWithGeo(geometry) {
        this._insureSafeTask();
        this._savePrivateGeometry(geometry);
    };

    GeoSplit.prototype._insureSafeTask = function _insureSafeTask() {
        if (this.geometry) this.remove();
    };

    GeoSplit.prototype._savePrivateGeometry = function _savePrivateGeometry(geometry) {
        this.geometry = geometry;
        this.layer = geometry.getLayer();
        this._addTo(geometry.getMap());
    };

    GeoSplit.prototype._addTo = function _addTo(map) {
        if (this._chooseLayer) this.remove();
        if (map._map_tool && map._map_tool instanceof maptalks.DrawTool) map._map_tool.disable();
        this._map = map;
        this._tmpLayer = new maptalks.VectorLayer(this._layerTMP).addTo(map).bringToFront();
        this._chooseLayer = new maptalks.VectorLayer(this._layerName).addTo(map).bringToFront();
        this._registerMapEvents();
        return this;
    };

    GeoSplit.prototype._registerMapEvents = function _registerMapEvents() {
        this._map.on('mousemove', this._mousemoveEvents, this);
        this._map.on('click', this._clickEvents, this);
    };

    GeoSplit.prototype._offMapEvents = function _offMapEvents() {
        this._map.off('mousemove', this._mousemoveEvents, this);
        this._map.off('click', this._clickEvents, this);
    };

    GeoSplit.prototype._mousemoveEvents = function _mousemoveEvents(e) {
        var _this2 = this;

        var geos = this.layer.identify(e.coordinate);
        var lines = geos.reduce(function (target, geo) {
            if (!(geo instanceof maptalks.LineString)) return target;
            var coordSplit = _this2._getSafeCoords();
            var coord = _this2._getSafeCoords(geo);
            if (lodash_isequal(coord, coordSplit)) return target;
            return [].concat(target, [geo]);
        }, []);
        this._updateHitGeo(lines);
    };

    GeoSplit.prototype._getSafeCoords = function _getSafeCoords() {
        var geo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.geometry;

        var coords = geo.getCoordinates();
        var options = geo.options || {};
        var numberOfShellPoints = options.numberOfShellPoints;

        if (numberOfShellPoints) {
            options.numberOfShellPoints = 300;
            geo.setOptions(options);
            coords = [geo.getShell()];
            options.numberOfShellPoints = numberOfShellPoints || 60;
            geo.setOptions(options);
        }
        return coords;
    };

    GeoSplit.prototype._updateHitGeo = function _updateHitGeo(geos) {
        var id = '_hit';
        if (this._needRefreshSymbol) {
            var hitGeoCopy = this._chooseLayer.getGeometryById(id);
            if (hitGeoCopy) {
                hitGeoCopy.remove();
                delete this.hitGeo;
            }
            this._needRefreshSymbol = false;
        }
        if (geos && geos.length > 0) {
            this._needRefreshSymbol = true;
            this.hitGeo = geos[0];
            var hitSymbol = this._getSymbolOrDefault(this.hitGeo, 'Hit');
            this._copyGeoUpdateSymbol(this.hitGeo, hitSymbol).setId(id);
        }
    };

    GeoSplit.prototype._getSymbolOrDefault = function _getSymbolOrDefault(geo, type) {
        var symbol = geo.getSymbol();
        var color = this.options['color' + type];
        var lineWidth = 4;
        if (symbol) {
            for (var key in symbol) {
                if (key.endsWith('Fill') || key.endsWith('Color')) symbol[key] = color;
            }
            symbol.lineWidth = lineWidth;
        } else symbol = { lineColor: color, lineWidth: lineWidth };
        return symbol;
    };

    GeoSplit.prototype._copyGeoUpdateSymbol = function _copyGeoUpdateSymbol(geo, symbol) {
        return geo.copy().updateSymbol(symbol).addTo(this._chooseLayer);
    };

    GeoSplit.prototype._clickEvents = function _clickEvents() {
        if (this.hitGeo) {
            var coordHit = this._getSafeCoords(this.hitGeo);
            this._setChooseGeosExceptHit(coordHit);
            this._updateChooseGeos();
        }
    };

    GeoSplit.prototype._setChooseGeosExceptHit = function _setChooseGeosExceptHit(coordHit) {
        var _this3 = this;

        var chooseNext = this._chooseGeos.reduce(function (target, geo) {
            var coord = _this3._getSafeCoords(geo);
            if (lodash_isequal(coordHit, coord)) return target;
            return [].concat(target, [geo]);
        }, []);
        if (chooseNext.length === this._chooseGeos.length) this._chooseGeos.push(this.hitGeo);else this._chooseGeos = chooseNext;
    };

    GeoSplit.prototype._updateChooseGeos = function _updateChooseGeos() {
        var _this4 = this;

        var layer = this._chooseLayer;
        layer.clear();
        this._chooseGeos.forEach(function (geo) {
            var chooseSymbol = _this4._getSymbolOrDefault(geo, 'Chosen');
            _this4._copyGeoUpdateSymbol(geo, chooseSymbol);
        });
    };

    GeoSplit.prototype._splitWithTargets = function _splitWithTargets() {
        var targets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._chooseGeos;

        if (this.geometry) {
            this._deals = this.options['deleteTargets'] ? targets : [];
            if (this.geometry instanceof maptalks.Polygon) this._splitPolygonWithTargets(targets);
            if (this.geometry instanceof maptalks.LineString) this._splitLineWithTargets(targets);
        }
    };

    GeoSplit.prototype._splitPolygonWithTargets = function _splitPolygonWithTargets(targets) {
        var _this5 = this;

        var result = void 0;
        targets = this._getPolygonAvailTargets(targets);
        targets.forEach(function (target) {
            result = result ? result.reduce(function (last, geo) {
                _this5.geometry = geo;
                return [].concat(last, _this5._splitPolygonTargetBase(target));
            }, []) : _this5._splitPolygonTargetBase(target);
            if (_this5.options['deleteTargets']) target.remove();
        });
        this._result = result;
    };

    GeoSplit.prototype._getPolygonAvailTargets = function _getPolygonAvailTargets(targets) {
        var _this6 = this;

        return targets.reduce(function (last, target) {
            var result = [].concat(last, _this6._getPolygonAvailTarget(target));
            if (_this6.options['deleteTargets']) target.remove();
            return result;
        }, []);
    };

    GeoSplit.prototype._getPolygonAvailTarget = function _getPolygonAvailTarget(target) {
        var avail = [];
        var avails = [];
        var one = false;
        var coords = this._getSafeCoords(target);
        for (var i = 0; i < coords.length; i++) {
            if (one) {
                avail = lodash_unionwith(avail, [coords[i]], lodash_isequal);
                var lastStartInner = this.geometry.containsPoint(coords[i - 1]);
                var lastEndOuter = !this.geometry.containsPoint(coords[i]);
                if (lastStartInner && lastEndOuter) {
                    one = false;
                    avail = lodash_unionwith(avail, [coords[i]], lodash_isequal);
                    avails.push(avail);
                    avail = [];
                    i--;
                }
            } else {
                if (coords[i + 1]) {
                    var line = new maptalks.LineString([coords[i], coords[i + 1]]);
                    var points = this._getPolygonPolylineIntersectPoints(line);
                    if (points.length > 0) {
                        var startOuter = !this.geometry.containsPoint(coords[i]);
                        var endInner = this.geometry.containsPoint(coords[i + 1]);
                        if (startOuter && endInner) {
                            one = true;
                            avail = lodash_unionwith(avail, [coords[i]], lodash_isequal);
                        } else avails.push([coords[i], coords[i + 1]]);
                    }
                }
            }
        }
        return avails.map(function (line) {
            return new maptalks.LineString(line);
        });
    };

    GeoSplit.prototype._getPolygonPolylineIntersectPoints = function _getPolygonPolylineIntersectPoints(target) {
        var polygon = this._getPoint2dFromCoords(this.geometry);
        var polyline = this._getPoint2dFromCoords(target);

        var _Intersection$interse = Intersection.intersectPolygonPolyline(polygon, polyline),
            points = _Intersection$interse.points;

        return points;
    };

    GeoSplit.prototype._splitPolygonTargetBase = function _splitPolygonTargetBase(target) {
        var points = this._getPolygonPolylineIntersectPoints(target);
        var result = void 0;
        if (points.length === 2) result = this._splitWithTargetMoreTwo(target);else if (this._getSafeCoords(target).length === 2 && points.length > 2) result = this._splitWithTargetCommon(target);else return [this.geometry];
        this.geometry.remove();
        return result;
    };

    GeoSplit.prototype._splitWithTargetCommon = function _splitWithTargetCommon(target) {
        var _this7 = this;

        var coords0 = this._getSafeCoords()[0];
        var polyline = this._getPoint2dFromCoords(target);
        var forward = true;
        var main = [];
        var child = [];
        var children = [];
        for (var i = 0; i < coords0.length - 1; i++) {
            var line = new maptalks.LineString([coords0[i], coords0[i + 1]]);
            var polylineTmp = this._getPoint2dFromCoords(line);

            var _Intersection$interse2 = Intersection.intersectPolylinePolyline(polyline, polylineTmp),
                points = _Intersection$interse2.points;

            var _getCoordsFromPoints2 = this._getCoordsFromPoints(points),
                ects = _getCoordsFromPoints2[0];

            if (lodash_isequal(coords0[i], ects) || points.length > 0) {
                if (forward) {
                    main.push(coords0[i], ects);
                    child.push(ects);
                } else {
                    main.push(ects);
                    child.push(coords0[i], ects);
                    children.push(child);
                    child = [];
                }
                forward = !forward;
            } else {
                if (forward) main.push(coords0[i]);else child.push(coords0[i]);
            }
        }
        var result = [];
        var symbol = this.geometry.getSymbol();
        var properties = this.geometry.getProperties();
        var geo = new maptalks.Polygon(main, { symbol: symbol, properties: properties }).addTo(this.layer);
        result.push(geo);
        children.forEach(function (childCoord) {
            geo = new maptalks.Polygon(childCoord, {
                symbol: symbol,
                properties: properties
            }).addTo(_this7.layer);
            result.push(geo);
        });
        return result;
    };

    GeoSplit.prototype._getPoint2dFromCoords = function _getPoint2dFromCoords(geo) {
        var map = this._map;
        var zoom = map.getZoom();
        var coords = this._getSafeCoords(geo);
        return lodash_flattendeep(coords).map(function (coord) {
            return map.coordinateToPoint(coord, zoom);
        });
    };

    GeoSplit.prototype._getCoordsFromPoints = function _getCoordsFromPoints(points) {
        if (!(points instanceof Array)) points = [points];
        var map = this._map;
        var zoom = map.getZoom();
        return points.map(function (point2d) {
            return map.pointToCoordinate(point2d, zoom);
        });
    };

    GeoSplit.prototype._splitWithTargetMoreTwo = function _splitWithTargetMoreTwo(target) {
        var coords0 = this._getSafeCoords()[0];
        var polyline = this._getPoint2dFromCoords(target);
        var forward = true;
        var main = [];
        var child = [];
        var gap = [];
        for (var i = 0; i < coords0.length - 1; i++) {
            var line = new maptalks.LineString([coords0[i], coords0[i + 1]]);
            var polylineTmp = this._getPoint2dFromCoords(line);

            var _Intersection$interse3 = Intersection.intersectPolylinePolyline(polyline, polylineTmp),
                points = _Intersection$interse3.points;

            var ects = this._getCoordsFromPoints(points);
            var ect = ects[0];

            if (lodash_isequal(coords0[i], ect) || points.length > 0) {
                if (forward) main.push(coords0[i], ect);else main.push(ect);
                if (gap.length === 0) {
                    gap = this._getTargetGap(target, points[0]);
                    if (gap.length > 0) {
                        main.push.apply(main, gap);
                        child.push.apply(child, gap.reverse());
                    }
                }
                if (forward) child.push(ect);else child.push(coords0[i], ect);
                if (ects.length > 1) {
                    main.push(ects[1]);
                    child.push(ects[1]);
                } else forward = !forward;
            } else {
                if (forward) main.push(coords0[i]);else child.push(coords0[i]);
            }
        }
        var result = [];
        var symbol = this.geometry.getSymbol();
        var properties = this.geometry.getProperties();
        var geo = new maptalks.Polygon(main, { symbol: symbol, properties: properties }).addTo(this.layer);
        result.push(geo);
        geo = new maptalks.Polygon(child, { symbol: symbol, properties: properties }).addTo(this.layer);
        result.push(geo);
        return result;
    };

    GeoSplit.prototype._getTargetGap = function _getTargetGap(target, point0) {
        var coords = this._getSafeCoords(target);
        var polygon = this._getPoint2dFromCoords(this.geometry);
        var record = false;
        var index = [];
        var indexStart = void 0;
        this._tmpLayer.hide();
        for (var i = 0; i < coords.length - 1; i++) {
            if (record) index.push(i);
            var line = new maptalks.LineString([coords[i], coords[i + 1]]);
            var points = this._getPolygonPolylineIntersectPoints(line);
            if (points.length > 0) {
                if (lodash_isequal(points[0], point0)) indexStart = i + 1;
                record = !record;
            }
        }
        this._tmpLayer.clear().show();
        if (index[0] !== indexStart) index.reverse();
        return index.map(function (i) {
            return coords[i];
        });
    };

    GeoSplit.prototype._splitLineWithTargets = function _splitLineWithTargets(targets) {
        var _this8 = this;

        targets = this._getLineAvailTargets(targets);
        var result = void 0;
        targets.forEach(function (target) {
            result = result ? result.reduce(function (last, geo) {
                _this8.geometry = geo;
                return [].concat(last, _this8._splitLineTargetBase(target));
            }, []) : _this8._splitLineTargetBase(target);
            if (_this8.options['deleteTargets']) target.remove();
        });
        this._result = result;
    };

    GeoSplit.prototype._splitLineTargetBase = function _splitLineTargetBase(target) {
        var _this9 = this;

        var polyline = this._getPoint2dFromCoords(target);
        var coords = this._getSafeCoords();
        var lineCoord = [coords[0]];
        var lines = [];
        for (var i = 0; i < coords.length; i++) {
            if (coords[i + 1]) {
                var line = new maptalks.LineString([coords[i], coords[i + 1]]);
                var polylineTmp = this._getPoint2dFromCoords(line);

                var _Intersection$interse4 = Intersection.intersectPolylinePolyline(polyline, polylineTmp),
                    points = _Intersection$interse4.points;

                if (points.length > 0) {
                    var _getCoordsFromPoints3 = this._getCoordsFromPoints(points),
                        ects = _getCoordsFromPoints3[0];

                    lineCoord.push(ects);
                    lines.push(lineCoord);
                    lineCoord = [ects, coords[i + 1]];
                } else lineCoord.push(coords[i + 1]);
            } else if (lineCoord.length > 0) {
                lineCoord.push(coords[i]);
                lines.push(lineCoord);
            }
        }
        var result = lines.map(function (line) {
            return new maptalks.LineString(line).addTo(_this9.layer);
        });
        this.geometry.remove();
        return result;
    };

    GeoSplit.prototype._getLineAvailTargets = function _getLineAvailTargets(targets) {
        var _this10 = this;

        return targets.reduce(function (last, target) {
            var result = [].concat(last, _this10._getLineAvailTarget(target));
            if (_this10.options['deleteTargets']) target.remove();
            return result;
        }, []);
    };

    GeoSplit.prototype._getLineAvailTarget = function _getLineAvailTarget(target) {
        var lines = [];
        var coords = this._getSafeCoords(target);
        for (var i = 0; i < coords.length - 1; i++) {
            var line = new maptalks.LineString([coords[i], coords[i + 1]]);
            var points = this._getPolygonPolylineIntersectPoints(line);
            if (points.length > 0) lines.push(line);
        }
        return lines;
    };

    return GeoSplit;
}(maptalks.Class);

GeoSplit.mergeOptions(options);

exports.GeoSplit = GeoSplit;

Object.defineProperty(exports, '__esModule', { value: true });

typeof console !== 'undefined' && console.log('maptalks.geosplit v0.1.2, requires maptalks@>=0.31.0.');

})));
