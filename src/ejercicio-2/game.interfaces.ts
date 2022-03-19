type Token = {i: number, j: number}

interface GameActions {
  runRound?(): void,
  runGame?(): void,
}

interface GameStatus {
  isWinner?(): boolean,
  isTie?(): boolean,
}

interface PrintableGame {
  print(): void,
}

interface InteractiveGame {
  inputMenu(): void,
}

export {
  Token,
  GameActions,
  GameStatus,
  PrintableGame,
  InteractiveGame,
};
