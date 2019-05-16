class Board {
    private board: Array<Array<Tile>> = [];
    public static readonly size: number = 15;
    public static readonly tileSize: number = w / 15;
    constructor() {
        for (let y: number = 0; y < Board.size; y++) {
            this.board.push([]);
            for (let x: number = 0; x < Board.size; x++) {
                this.board[y].push(new Tile(x, y, undefined));
            }
        }
    }

    draw() {
        for (let y: number = 0; y < Board.size; y++) {
            for (let x: number = 0; x < Board.size; x++) {
                ctx.strokeRect(x * Board.tileSize, y * Board.tileSize, Board.tileSize, Board.tileSize);
                if (this.board[y][x].gate) {
                    this.board[y][x].gate.draw();
                }
            }
        }
    }

    getTileFromCoords(x: number, y: number) {
        return this.board[Math.floor(y / Board.tileSize)][Math.floor(x / Board.tileSize)];
    }




}



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