type Token = {i: number, j: number}

interface GameActions {
  runRound?(): void,
  startGame?(): void,
}

interface GameStatus {
  isWinner?(): void,
  fault?(): boolean,
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
