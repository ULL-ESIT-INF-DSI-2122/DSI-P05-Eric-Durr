import * as rl from 'readline-sync';
import { ConnectFourPlayer } from "./connectFourPlayer.class";
import { GameActions, GameStatus, PrintableGame } from "./game.interfaces"; // eslint-disable-line

export class ConnectFourGame implements GameStatus, GameActions, PrintableGame {
  private playerA: ConnectFourPlayer;

  private playerB: ConnectFourPlayer;

  private slots: boolean[][];

  constructor(playerA: ConnectFourPlayer, playerB: ConnectFourPlayer,) {
    this.playerA = playerA;
    this.playerB = playerB;
    this.slots = [
      [true, true, true, true, true, true],
      [true, true, true, true, true, true],
      [true, true, true, true, true, true],
      [true, true, true, true, true, true],
      [true, true, true, true, true, true],
      [true, true, true, true, true, true],
    ];
  }

  isTie(): boolean {
    let tie: boolean = true;
    this.getBoard()
      .forEach((row) => {
        row.forEach((el) => {
          tie = !el;
        });
      });
    return tie;
  }

  print(): void {
    console.log(
      `Game between [31m${this.playerA.getName()}[37m and [33m${this.playerB.getName()}[37m `
      + `| ${this.playerA.getTokens().length + this.playerB.getTokens().length } tokens inside`);
    let rowString: string = '';
    rowString += '\n  1   2   3   4   5   6  \n';
    rowString += '┌───┬───┬───┬───┬───┬───┐\n';
    this.slots.forEach((row, i) => {
      rowString += '│';
      row.forEach((col, j) => {
        if (this.playerA.getTokens().filter((el) => el.i === i && el.j === j).length > 0) {
          rowString += ' [31m■[37m │';
        } else if (this.playerB.getTokens().filter((el) => el.i === i && el.j === j).length > 0) {
          rowString += ' [33m■[37m │';
        } else {
          rowString += '   │';
        }
      });
      rowString += '\n';

      if (i !== 5) {
        rowString += '├───┼───┼───┼───┼───┼───┤\n';
      }
    });
    rowString += '└───┴───┴───┴───┴───┴───┘\n';
    console.log(rowString);
  }

  insertToken(col: number, player: ConnectFourPlayer): boolean {
    if (this.getColumn(col - 1).filter((el) => el).length === 0) { return false; }
    let moved: boolean = false;
    this.getColumn(col - 1)
      .reverse()
      .forEach((el, row) => {
        if ((el === true) && (moved === false)) {
          moved = true;
          this.slots[5 - row][col - 1] = false;
          player.makeMove({ i: 5 - row, j: col - 1 });
        }
      });
    return true;
  }

  runRound(): void {
  }

  runGame(): void {
    while (!this.isTie()
    && !this.playerA.isWinner()
    && !this.playerB.isWinner()) {
      if (!this.isTie()
      && !this.playerA.isWinner()
      && !this.playerB.isWinner()) {
        let column: string = rl.question('player A column');
        if ((+column >= 0) && (+column < 6)) {
          this.insertToken(+column, this.playerA);
          this.print();
        }
        column = rl.question('player B column');
        if ((+column >= 0) && (+column < 6)) {
          this.insertToken(+column, this.playerB);
          this.print();
        }
      }
    }
    if (this.playerA.isWinner()) {
      console.log(`Wins ${this.playerA.getName()}!!!!`);
    }
    if (this.playerB.isWinner()) {
      console.log(`Wins ${this.playerB.getName()}!!!!`);
    }
    if (this.isTie()) {
      console.log('There was a tie between the players ...');
    }
  }

  getBoard(): boolean[][] {
    return this.slots;
  }

  getColumn(col: number): boolean[] {
    const column: boolean[] = [];
    for (let i: number = 0; i < 6; i += 1) {
      for (let j: number = 0; j < 6; j += 1) {
        if (j === col) {
          column.push(this.getBoard()[i][j]);
        }
      }
    }
    return column;
  }
}