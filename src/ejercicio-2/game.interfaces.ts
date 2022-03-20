/**
 * # Custom type Token
 * object of 2D coordinates
 */
type Token = {i: number, j: number}

/**
 * # Game Actions | interface
 * defines posible actions within a game
 */
interface GameActions {
  runRound?(): void,
  runGame?(): void,
}

/**
 * # Game Satus | interface
 * defines posible status within a game
 */
interface GameStatus {
  isWinner?(): boolean,
  isTie?(): boolean,
}

/**
 * # Printable Game | interface
 * used when a game implements a print method
 */
interface PrintableGame {
  print(): void,
}

export {
  Token,
  GameActions,
  GameStatus,
  PrintableGame,
};
