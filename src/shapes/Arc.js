(function() {
    /**
     * Arc constructor
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.angle
     * @param {Number} config.angleDeg angle in degrees
     * @param {Number} config.innerRadius
     * @param {Number} config.outerRadius
     * @param {Boolean} [config.clockwise]
     * @@shapeParams
     * @@nodeParams
     * @example
     * // draw a Arc that's pointing downwards<br>
     * var Arc = new Kinetic.Arc({<br>
     *   innerRadius: 40,<br>
     *   outerRadius: 80,<br>
     *   fill: 'red',<br>
     *   stroke: 'black'<br>
     *   strokeWidth: 5,<br>
     *   angleDeg: 60,<br>
     *   rotationDeg: -120<br>
     * });
     */
    Kinetic.Arc = function(config) {
        this.___init(config);
    };

    Kinetic.Arc.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Arc';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var angle = this.angle() * Math.PI / 180,
                clockwise = this.clockwise();

            context.beginPath();
            context.arc(0, 0, this.getOuterRadius(), 0, angle, clockwise);
            context.arc(0, 0, this.getInnerRadius(), angle, 0, !clockwise);
            context.closePath();
            context.fillStrokeShape(this);
        }
    };
    Kinetic.Util.extend(Kinetic.Arc, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Arc, 'innerRadius', 0);

    /**
     * get/set innerRadius
     * @name innerRadius
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} innerRadius
     * @returns {Number}
     * @example
     * // get inner radius
     * var innerRadius = arc.innerRadius();
     *
     * // set inner radius
     * arc.innerRadius(20);
     */
     
    Kinetic.Factory.addGetterSetter(Kinetic.Arc, 'outerRadius', 0);

    /**
     * get/set outerRadius
     * @name outerRadius
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} outerRadius
     * @returns {Number}
     * @example
     * // get outer radius
     * var outerRadius = arc.outerRadius();
     *
     * // set outer radius
     * arc.outerRadius(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Arc, 'angle', 0);

    /**
     * get/set angle in degrees
     * @name angle
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} angle
     * @returns {Number}
     * @example
     * // get angle
     * var angle = arc.angle();
     *
     * // set angle
     * arc.angle(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Arc, 'clockwise', false);

    /**
     * get/set clockwise flag
     * @name clockwise
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} clockwise
     * @returns {Number}
     * @example
     * // get clockwise flag
     * var clockwise = arc.clockwise();
     *
     * // draw arc counter-clockwise
     * arc.clockwise(false);
     *
     * // draw arc clockwise
     * arc.clockwise(true);
     */
})();