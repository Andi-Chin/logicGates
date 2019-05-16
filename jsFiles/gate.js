var GateType;
(function (GateType) {
    GateType[GateType["AND"] = 0] = "AND";
    GateType[GateType["OR"] = 1] = "OR";
    GateType[GateType["NAND"] = 2] = "NAND";
    GateType[GateType["NOT"] = 3] = "NOT";
    GateType[GateType["X"] = 4] = "X";
})(GateType || (GateType = {}));
var Gate = /** @class */ (function () {
    // contructor function for gates that take 2 inputs
    function Gate(name) {
        this.name = name;
    }
    Gate.prototype.deepCopy = function () {
        if (this.inp1 === undefined || this.inp2 === undefined) {
            throw "why are you deep-copying this gate? The inputs still needs to be set";
        }
        else {
            // newGate: Gate = new Gate(this.name, this.inp2.deepCopy());
            var newGate = new Gate(this.name);
            newGate.setInp1(this.inp1);
            newGate.setInp2(this.inp2);
            return newGate;
        }
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
        else if (gateName == GateType.X) {
            return false;
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
        if (this.inp1 === undefined) {
            this.inp1 = inp1;
        }
        else {
            throw "inp1 is already defined wtf are you doing?";
        }
    };
    Gate.prototype.getInp2 = function () {
        return this.inp2;
    };
    Gate.prototype.setInp2 = function (inp2) {
        if (this.inp2 === undefined) {
            this.inp2 = inp2;
        }
        else {
            throw "inp2 is already defined wtf are you doing?";
        }
    };
    Gate.prototype.setX = function (x) {
        if (this.x === undefined) {
            this.x = x;
        }
        else {
            throw "x has already been set";
        }
    };
    Gate.prototype.setY = function (y) {
        if (this.y === undefined) {
            this.y = y;
        }
        else {
            throw "y has already been set";
        }
    };
    Gate.prototype.draw = function () {
        if (this.name === GateType.OR) {
        }
        else if (this.name === GateType.AND) {
            renderImage('./resources/andgate.png', this.x, this.y, Board.tileSize, Board.tileSize);
        }
        else {
            alert('oopsies, something went wrong!');
        }
        /*
            ______
    -------|      \
           |       |---------
    -------|______/
        */
    };
    return Gate;
}());
/*
how do you set up canvas in TS
~~i need to fix the building~~
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
https://www.typescriptlang.org/docs/handbook/basic-types.html
*/
