import { stat } from "fs";
import { Token, GameStatus } from "./game.interfaces"; // eslint-disable-line

const forbidenUpDiagonals: Token[] = [
  { i: 0, j: 0 },
  { i: 0, j: 1 },
  { i: 0, j: 2 },
  { i: 1, j: 0 },
  { i: 1, j: 1 },
  { i: 2, j: 0 },
  { i: 5, j: 4 },
  { i: 5, j: 5 },
  { i: 5, j: 6 },
  { i: 4, j: 5 },
  { i: 4, j: 6 },
  { i: 3, j: 6 },
];

const forbidenDownDiagonals: Token[] = [
  { i: 0, j: 4 },
  { i: 0, j: 5 },
  { i: 0, j: 6 },
  { i: 1, j: 5 },
  { i: 1, j: 6 },
  { i: 2, j: 6 },
  { i: 5, j: 0 },
  { i: 5, j: 1 },
  { i: 5, j: 2 },
  { i: 4, j: 0 },
  { i: 4, j: 1 },
  { i: 3, j: 0 },
];


export class ConnectFourPlayer implements GameStatus {
  private name: string;

  private color: string;

  private tokens: Token[];

  constructor(name: string = '', color: string = '') {
    this.name = name;
    this.color = color;
    this.tokens = [];
  }

  getName(): string { return this.name; }

  getColor(): string { return this.color; }

  getTokens(): Token[] { return this.tokens; }

  isWinner(): boolean {
    if (this.tokens.length < 4) { return false; }
    let status: boolean = false;
    // check horizontal
    this.tokens
      .sort((a, b) => a.i - b.i)
      .forEach((el, pos) => {
        if (pos < this.tokens.length - 3) {
          if (((el.i) === this.tokens[pos + 1].i
            && (el.i) === this.tokens[pos + 2].i
            && (el.i) === this.tokens[pos + 3].i)
            && ((Math.abs((el.j) - this.tokens[pos + 1].j) === 1)
            && (Math.abs((el.j + 1) - this.tokens[pos + 2].j) === 1)
            && (Math.abs((el.j + 2) - this.tokens[pos + 3].j) === 1))) {
            status = true;
          }
        }
      });
    // check vertical
    this.tokens
      .sort((a, b) => a.j - b.j)
      .forEach((el, pos) => {
        if (pos < this.tokens.length - 3) {
          if (((el.j) === this.tokens[pos + 1].j
            && (el.j) === this.tokens[pos + 2].j
            && (el.j) === this.tokens[pos + 3].j)
            && ((Math.abs((el.i) - this.tokens[pos + 1].i) === 1)
            && (Math.abs((el.i + 1) - this.tokens[pos + 2].i) === 1)
            && (Math.abs((el.i + 2) - this.tokens[pos + 3].i) === 1))) {
            status = true;
          }
        }
      });

    // check up diagonal
    this.tokens
      // Only up diagonal allowed tokens
      .filter((el) => {
        let pass: boolean = true;
        forbidenUpDiagonals.forEach((forbiden) => {
          if ((forbiden.i === el.i) && (forbiden.j === el.j)) {
            pass = false;
          }
        });
        return pass;
      })
      .forEach((el) => {
        let counter: number = 0;
        this.tokens.forEach((token) => {
          if ((token.i === (el.i)) && (token.j === (el.j))) {
            counter += 1;
          }
          if ((token.i === (el.i - 1)) && (token.j === (el.j + 1))) {
            counter += 1;
          }
          if ((token.i === (el.i - 2)) && (token.j === (el.j + 2))) {
            counter += 1;
          }
          if ((token.i === (el.i - 3)) && (token.j === (el.j + 3))) {
            counter += 1;
          }
        });
        if (counter === 4) { status = true; }
      });

    // Check down diagonal
    this.tokens
      // Only up diagonal allowed tokens
      .filter((el) => {
        let pass: boolean = true;
        forbidenDownDiagonals.forEach((forbiden) => {
          if ((forbiden.i === el.i) && (forbiden.j === el.j)) {
            pass = false;
          }
        });
        return pass;
      })
      .forEach((el) => {
        let counter: number = 0;
        this.tokens.forEach((token) => {
          if ((token.i === (el.i)) && (token.j === (el.j))) {
            counter += 1;
          }
          if ((token.i === (el.i + 1)) && (token.j === (el.j + 1))) {
            counter += 1;
          }
          if ((token.i === (el.i + 2)) && (token.j === (el.j + 2))) {
            counter += 1;
          }
          if ((token.i === (el.i + 3)) && (token.j === (el.j + 3))) {
            counter += 1;
          }
        });
        if (counter === 4) { status = true; }
      });
    return status;
  }

  makeMove(position: Token): boolean {
    if (this.tokens
      .filter((el) => (el.i === position.i) && (el.j === position.j))
      .length > 0) {
      return false;
    }
    this.tokens.push(position);
    return true;
  }
}
