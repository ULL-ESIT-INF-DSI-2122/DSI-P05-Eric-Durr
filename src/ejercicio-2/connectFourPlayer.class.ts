import { Token, GameActions, GameStatus } from "./game.interfaces"; // eslint-disable-line

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
    console.log(this.tokens.sort((a, b) => (a.i - b.i)));
    return true;
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
