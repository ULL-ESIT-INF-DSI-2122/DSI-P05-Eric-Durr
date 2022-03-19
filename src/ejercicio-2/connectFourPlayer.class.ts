import { Token, GameStatus } from "./game.interfaces"; // eslint-disable-line

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
    const evaluate: Token[] = this.tokens.sort((a, b) => (a.i - b.i));
    if (evaluate.length < 4) { return false; }
    let status: boolean = true;
    evaluate.forEach((el, pos) => {
      if (pos < evaluate.length - 1) {
        if ((evaluate[pos + 1].i - el.i) > 1) { status = false; }
        if ((evaluate[pos + 1].j - el.j) > 1) { status = false; }
      }
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
