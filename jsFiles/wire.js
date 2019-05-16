var Wire = /** @class */ (function () {
    function Wire(input, output) {
        this.inpNode = input;
        this.outNode = output;
    }
    Wire.prototype.run = function () {
        this.outNode.getGate().evaluateGate(this.outNode.getGate().getInp1(), this.outNode.getGate().getInp2());
        //TODO do this
    };
    Wire.prototype.getInput = function () {
        return this.inpNode;
    };
    Wire.prototype.getOutput = function () {
        return this.outNode;
    };
    return Wire;
}());
