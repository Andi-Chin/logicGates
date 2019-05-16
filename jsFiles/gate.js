var GateType;
(function (GateType) {
    GateType[GateType["AND"] = 0] = "AND";
    GateType[GateType["OR"] = 1] = "OR";
    GateType[GateType["NAND"] = 2] = "NAND";
    GateType[GateType["NOT"] = 3] = "NOT";
})(GateType || (GateType = {}));
var Gate = /** @class */ (function () {
    // contructor function for gates that take 2 inputs
    function Gate(name, inp1, inp2) {
        this.name = name;
        this.inp1 = inp1;
        this.inp2 = inp2;
    }
    Gate.prototype.deepCopy = function () {
        return new Gate(this.name, this.inp1.deepCopy(), this.inp2.deepCopy());
    };
    Gate.evaluateBool = function (gateName, inp1, inp2) {
        if (gateName == GateType.AND) {
            return inp1 && inp2;
        }
        else if (gateName == GateType.OR) {
            return inp1 || inp2;
        }
        else if (gateName == GateType.NAND) {
            return !(inp1 && inp2);
        }
        else if (gateName == GateType.NOT) {
            return !inp1;
        }
        else {
            // FIXME jk you don't need to fix this, unless the error occurs
            console.log(gateName);
            throw "aaaaaaaaaaaaa evalbool error";
        }
    };
    Gate.prototype.evaluateGate = function (inp1, inp2) {
        //TODO: evalBool(inp1, evalGate(inp2.inp1, inp2.inp2)) basically
        var evalInp1 = inp1.deepCopy(); // by default
        var evalInp2 = inp2.deepCopy(); // by default
        if (!inp1.getIsGate() && !inp2.getIsGate()) {
            return new GBWrapper(Gate.evaluateBool(this.name, inp1.getBool(), inp2.getBool()));
        }
        if (inp1.getIsGate()) {
            evalInp1 = inp1.getGate().evaluateGate(inp1.getGate().getInp1(), inp1.getGate().getInp2());
        }
        if (inp2.getIsGate()) {
            evalInp2 = inp2.getGate().evaluateGate(inp2.getGate().getInp1(), inp2.getGate().getInp2());
        }
        return new GBWrapper(Gate.evaluateBool(this.name, evalInp1.getBool(), evalInp2.getBool()));
    };
    Gate.prototype.getName = function () {
        return name;
    };
    Gate.prototype.setName = function (name) {
        this.name = name;
    };
    Gate.prototype.getInp1 = function () {
        return this.inp1;
    };
    Gate.prototype.setInp1 = function (inp1) {
        this.inp1 = inp1;
    };
    Gate.prototype.getInp2 = function () {
        return this.inp2;
    };
    Gate.prototype.setInp2 = function (inp2) {
        this.inp2 = inp2;
    };
    return Gate;
}());
/*
how do you set up canvas in TS
~~i need to fix the building~~
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
https://www.typescriptlang.org/docs/handbook/basic-types.html
*/
