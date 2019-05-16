var Board = /** @class */ (function () {
    function Board() {
        this.board = [];
        for (var y = 0; y < Board.size; y++) {
            this.board.push([]);
            for (var x = 0; x < Board.size; x++) {
                this.board[y].push(new Tile(x, y, undefined));
            }
        }
    }
    Board.prototype.draw = function () {
        for (var y = 0; y < Board.size; y++) {
            for (var x = 0; x < Board.size; x++) {
                ctx.strokeRect(x * Board.tileSize, y * Board.tileSize, Board.tileSize, Board.tileSize);
                if (this.board[y][x].gate) {
                    this.board[y][x].gate.draw();
                }
            }
        }
    };
    Board.prototype.getTileFromCoords = function (x, y) {
        return this.board[Math.floor(y / Board.tileSize)][Math.floor(x / Board.tileSize)];
    };
    Board.size = 15;
    Board.tileSize = w / 15;
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
