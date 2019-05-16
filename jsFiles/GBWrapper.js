// wrapper class for gate and boolean
var GBWrapper = /** @class */ (function () {
    /*
    since method overloading in typescript is pretty awkward
    I apologize in advance for the messy code
    */
    // @param it can either be a gate instance or boolean
    function GBWrapper(parameter) {
        if (parameter instanceof Gate) {
            this.gate = parameter;
            this.isGate = true;
        }
        else if (typeof parameter == "boolean") {
            this.bool = parameter;
            this.isGate = false;
        }
        else {
            console.log(parameter);
            throw "aaahahahahahahaa something happend!";
        }
    }
    GBWrapper.prototype.deepCopy = function () {
        if (this.isGate) {
            return new GBWrapper(this.gate);
        }
        else {
            return new GBWrapper(this.bool);
        }
    };
    GBWrapper.prototype.getIsGate = function () {
        return this.isGate;
    };
    GBWrapper.prototype.getGate = function () {
        return this.gate;
    };
    GBWrapper.prototype.getBool = function () {
        return this.bool;
    };
    GBWrapper.prototype.getValue = function () {
        if (this.isGate) {
            return this.gate;
        }
        else {
            return this.bool;
        }
    };
    return GBWrapper;
}());
