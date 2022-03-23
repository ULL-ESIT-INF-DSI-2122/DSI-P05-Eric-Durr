import * as rl from 'readline-sync';
import { ConnectFourPlayer } from "./connectFourPlayer.class"; // eslint-disable-line
import { GameActions, GameStatus, PrintableGame } from "./game.interfaces"; // eslint-disable-line

/**
 * # Connect four Game Class | Primary parent class
 *
 * ## Implements
 *
 * - GameStatus
 * - GameActions
 * - PrintableGame
 *
 * ## Features
 *
 * - playerA | ConnectFourPlayer object (stores token positions)
 * - playerB | ConnectFourPlayer object (stores token positions)
 * - slots | Array of booleans (marks played positions)
 *
 * ## Methods
 * - runGame(void) | Starts a game between the two players
 */

export class ConnectFourGame implements GameStatus, GameActions, PrintableGame {
  private playerA: ConnectFourPlayer;

  private playerB: ConnectFourPlayer;

  private slots: boolean[][];

  constructor(playerA: ConnectFourPlayer, playerB: ConnectFourPlayer) {
    this.playerA = playerA;
    this.playerB = playerB;
    this.slots = [
      [true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true],
    ];
  }

  isTie(): boolean {
    return this.playerA.getTokens().length + this.playerB.getTokens().length === 42;
  }

  print(): void {
    console.log(
      `Game between [31m${this.playerA.getName()}[37m and [33m${this.playerB.getName()}[37m `
      + `| ${this.playerA.getTokens().length + this.playerB.getTokens().length} tokens inside`,
    );
    let rowString: string = '';
    rowString += '\n  1   2   3   4   5   6   7  \n';
    rowString += '┌───┬───┬───┬───┬───┬───┬───┐\n';
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
        rowString += '├───┼───┼───┼───┼───┼───┼───┤\n';
      }
    });
    rowString += '└───┴───┴───┴───┴───┴───┴───┘\n';
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

  runGame(): void {
    while (!this.isTie()
    && !this.playerA.isWinner()
    && !this.playerB.isWinner()) {
      let ok: boolean = false;
      let column: string = '';
      while (!ok) {
        column = rl.question(`It's ${this.playerA.getName()}'s turn, insert a column: `);
        if ((+column > 0) && (+column <= 7)) {
          if (this.insertToken(+column, this.playerA)) {
            this.print();
            ok = true;
            if (this.isTie() || this.playerA.isWinner()) {
              break;
            }
          } else {
            console.log(`Column ${+column} is full, please choose another one ...`);
          }
        } else {
          console.log(`Column ${+column} is out of boundries, please choose another one ...`);
        }
      }

      if (this.isTie() || this.playerA.isWinner()) {
        break;
      }

      ok = false;

      while (!ok) {
        column = rl.question(`It's ${this.playerB.getName()}'s turn, insert a column: `);
        if ((+column > 0) && (+column <= 7)) {
          if (this.insertToken(+column, this.playerB)) {
            this.print();
            if (this.isTie()
              || this.playerA.isWinner()
              || this.playerB.isWinner()) {
              break;
            }
            ok = true;
          } else {
            console.log(`Column ${+column} is full, please choose another one ...`);
          }
        } else {
          console.log(`Column ${+column} is out of boundries, please choose another one ...`);
        }
      }

      if (this.isTie()
        || this.playerA.isWinner()
        || this.playerB.isWinner()) {
        break;
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

  getColumn(col: number): boolean[] {
    const column: boolean[] = [];
    for (let i: number = 0; i < 6; i += 1) {
      for (let j: number = 0; j < 7; j += 1) {
        if (j === col) {
          column.push(this.slots[i][j]);
        }
      }
    }
    return column;
  }

  getBoard(): boolean[][] { return this.slots; }
}
