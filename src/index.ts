type COLORS = `❤️`| `💙`| `💚`| `💛`| `💜`| `🖤`;

const ICONS: COLORS[] = [`❤️`, `💙`, `💚`, `💛`, `💜`, `🖤`]

const getRandomNumber = (length: number): number => Math.floor(Math.random() * length);
const getRange = (index: number) => Object.keys(Array.from(new Array(index))).map(_ => parseInt(_,10))
const getBoardRows = (cells: number): COLORS[] => getRange(cells).map((_) => ICONS[getRandomNumber(ICONS.length)]);

export class BoardGame {
    public board: COLORS[][] = [];
    private oldOrigin: COLORS;
    constructor(private n: number, private m: number) {
        this.board = getBoardRows(n).map(() =>getBoardRows(n))
    }
    public select = (chosenColor: COLORS) => {
        this.oldOrigin = this.board[0][0];
        this.board[0][0] = chosenColor;
        this.board = this.findIndexesConnectedToOrigin(chosenColor);
    }

    private findIndexesConnectedToOrigin = (selectedColor: COLORS) => {
        return this.board.map((cur, rowIndex) => {
            return cur.reduce((accc, current, cellIndex) => {
                return [...accc, this.isConnectedToOrigin(current, rowIndex, cellIndex) ? selectedColor : current]
            }, []);
        });
    } 

    public isConnectedToOrigin = (curr:COLORS, row:number, index: number ): any => {
        const isConnectedInSameRow = getRange(index)
            .map((i) => this.board[row][i] === this.oldOrigin)
            .find(res => res===false);

        const isConnectedInSameColumn = getRange(row+1)
            .map((current) => this.board[current][index] === this.oldOrigin)
            .find(res => res===false);

        return Boolean(isConnectedInSameRow && isConnectedInSameColumn);
    } 
}
