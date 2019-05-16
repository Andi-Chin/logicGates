enum GateType {
    AND, OR, NAND, NOT
}

class Gate {

    private name: GateType;
    private inp1: GBWrapper;
    private inp2: GBWrapper;
    // contructor function for gates that take 2 inputs
    constructor(name: GateType, inp1: GBWrapper, inp2: GBWrapper) {
        this.name = name;
        this.inp1 = inp1;
        this.inp2 = inp2;
    }

    public deepCopy() : Gate {
        return new Gate(this.name, this.inp1.deepCopy(), this.inp2.deepCopy());
    }

    public static evaluateBool(gateName: GateType, inp1: boolean, inp2: boolean) : boolean {
        if (gateName == GateType.AND) {
            return inp1 && inp2;
        }else if (gateName == GateType.OR) {
            return inp1 || inp2;
        }else if (gateName == GateType.NAND) {  // in this case just make inp2 false
            return !(inp1 && inp2);
        }else if (gateName == GateType.NOT) {
            return !inp1;
        }
        else {
            // FIXME jk you don't need to fix this, unless the error occurs
            console.log(gateName);
            throw "aaaaaaaaaaaaa evalbool error";
        }
    }

    public evaluateGate(inp1: GBWrapper, inp2: GBWrapper) : GBWrapper {

        //TODO: evalBool(inp1, evalGate(inp2.inp1, inp2.inp2)) basically

        let evalInp1: GBWrapper = inp1.deepCopy();  // by default
        let evalInp2: GBWrapper = inp2.deepCopy();  // by default

        if (!inp1.getIsGate() && !inp2.getIsGate()) {  // if both are boolean values
            return new GBWrapper(Gate.evaluateBool(this.name, inp1.getBool(), inp2.getBool()));

        }

        if (inp1.getIsGate()) {  // if inp1 is a gate

            evalInp1 = inp1.getGate().evaluateGate(inp1.getGate().getInp1(), inp1.getGate().getInp2());
        }
        if (inp2.getIsGate()) {  // if inp2 is a gate
            evalInp2 = inp2.getGate().evaluateGate(inp2.getGate().getInp1(), inp2.getGate().getInp2());
        }
        return new GBWrapper(Gate.evaluateBool(this.name, evalInp1.getBool(), evalInp2.getBool()));
    }
    

    public getName() : GateType {
        return name;
    }

    public setName(name: GateType) : void {
        this.name = name;
    }

    public getInp1() : GBWrapper {
        return this.inp1;
    }

    public setInp1(inp1: GBWrapper) : void {
        this.inp1 = inp1;
    }

    public getInp2() : GBWrapper {
        return this.inp2;
    }

    public setInp2(inp2: GBWrapper) : void {
        this.inp2 = inp2;
    }

    // draw() {
    //     if (this.name === GateType.OR) {

    //     } else if (this.name === GateType.AND) {
    //         renderImage('./resources/andgate.png', this.x, this.y, this.tileSize, this.tileSize);
    //     } else {
    //         alert('oopsies, something went wrong!');
    //     }
    //     /*
    //         ______ 
    // -------|      \
    //        |       |--------- 
    // -------|______/
    //     */
    // }
}







/*
how do you set up canvas in TS
~~i need to fix the building~~
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
https://www.typescriptlang.org/docs/handbook/basic-types.html
*/
