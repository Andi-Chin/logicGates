//the canvas setup is in utils.ts
// let b: Board = new Board();

// function gameLoop() {
//     ctx.clearRect(0, 0, w, h);

//     if (leftMouseClicked == true) {
//         let tileAtMouse: Tile = b.getTileFromCoords(mouse.x, mouse.y);
//         console.log(tileAtMouse);
//         tileAtMouse.gate = new Gate('and', 
//                                     Math.floor(mouse.x / b.tileSize) * b.tileSize, 
//                                     Math.floor(mouse.y / b.tileSize) * b.tileSize, 
//                                                 b.tileSize);
//     }
//     b.draw();
//     requestAnimationFrame(gameLoop);
// }
// gameLoop();


//basically here's how you use it, I made a GBWrapper class to contain an input,
//since typescript doesn't allow functions to have a parameter of types 'Gate' and 'boolean'
//but yea, with the GBWrapper you can initialize an input that's either a 'Gate' or 'boolean'
// the code below looks like this on paper:
// 1 = true
// 0 = false
//
//         1   0
//          \ /
//          AND
//
//for example, if you want a boolean input you would do:
let input1 = new GBWrapper(true);
//let's make another one:
let input2 = new GBWrapper(false);

//so now that you have two inputs, you use these to make a gate like so:

let gate1 = new Gate(GateType.AND, input1, input2);

//now we can evaluate the gate by calling it's method
//I know it's a bit tedious to have to use getters, but it's just way more organized that way
let result: GBWrapper = gate1.evaluateGate(gate1.getInp1(), gate1.getInp2());

//and we can print it out by doing this:
console.log(result.getBool());
 




/**
below is an example of using a gate as an input for another gate
the code below the equivalent of something like this:
1=true
0=false

   0    0
    \  /
     OR   1
      \   /
       AND

let gate2: Gate = new Gate(GateType.OR, new GBWrapper(false), new GBWrapper(false));
let gate1: Gate = new Gate(GateType.AND, new GBWrapper(gate2), new GBWrapper(true));
let result: GBWrapper =  gate1.evaluateGate(gate1.getInp1(), gate1.getInp2());
console.log(result.getBool());
*/