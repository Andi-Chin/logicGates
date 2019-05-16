var Board = /** @class */ (function () {
    function Board() {
        this.board = [];
        this.size = 15;
        this.tileSize = w / 15;
        for (var y = 0; y < this.size; y++) {
            this.board.push([]);
            for (var x = 0; x < this.size; x++) {
                this.board[y].push(new Tile(x, y, undefined));
            }
        }
    }
    Board.prototype.draw = function () {
        for (var y = 0; y < this.size; y++) {
            for (var x = 0; x < this.size; x++) {
                ctx.strokeRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
                if (this.board[y][x].gate) {
                    this.board[y][x].gate.draw();
                }
            }
        }
    };
    Board.prototype.getTileFromCoords = function (x, y) {
        return this.board[Math.floor(y / this.tileSize)][Math.floor(x / this.tileSize)];
    };
    return Board;
}());
/*
you deleted my peepee :(
       ---------
       \        \
       |\ orange \
       | |_juice_|
       | |       |
       | |_______|
       | |       |
        \|_______|

       dayshadow
        ___
       |0 0|
        <_>
       /   \
      /|   |\
     |  \_/  |
        / \
       /   \

       lmao
lol


*/ 
