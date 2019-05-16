class Wire {
    private inpNode: GBWrapper;
    private outNode: GBWrapper;
    public constructor(input: GBWrapper, output: GBWrapper) {
        this.inpNode = input;
        this.outNode = output;
    }
    public run() : void {
        this.outNode.getGate().evaluateGate(this.outNode.getGate().getInp1(),
                                            this.outNode.getGate().getInp2());
        //TODO do this

    }

    public getInput() : GBWrapper {
        return this.inpNode;
    }
    public getOutput() : GBWrapper {
        return this.outNode;
    }
    
}