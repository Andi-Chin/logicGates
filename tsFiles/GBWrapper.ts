// wrapper class for gate and boolean
class GBWrapper {
    private gate: Gate;
    private bool: boolean;
    private isGate: boolean;

    /*
    since method overloading in typescript is pretty awkward 
    I apologize in advance for the messy code
    */
    // @param it can either be a gate instance or boolean
    public constructor(parameter: any) {
        if (parameter instanceof Gate) {
            this.gate = parameter;
            this.isGate = true;
        }else if (typeof parameter == "boolean") {
            this.bool = parameter;
            this.isGate = false;
        }else {
            console.log(parameter);
            throw "aaahahahahahahaa something happend!";
        }
    }
    public deepCopy() : GBWrapper {

        if (this.isGate) {
            return new GBWrapper(this.gate);
        }else {
            return new GBWrapper(this.bool);
        }
    }
    public getIsGate() : boolean {
        return this.isGate;
    }
    public getGate() : Gate {
        return this.gate;
    }
    public getBool() : boolean {
        return this.bool;
    }

    public getValue() : Object {
        if (this.isGate) {
            return this.gate;
        }else {
            return this.bool;
        }
    }



}
