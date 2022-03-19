import { ConnectFourPlayer } from './connectFourPlayer.class'; // eslint-disable-line
import { ConnectFourGame } from './connectFourGame.class'; // eslint-disable-line

const pablo: ConnectFourPlayer = new ConnectFourPlayer('pablo', 'red');
const marta: ConnectFourPlayer = new ConnectFourPlayer('marta', 'yellow');
const boardGame: ConnectFourGame = new ConnectFourGame(pablo, marta);

boardGame.insertToken(1, pablo);
boardGame.print();
boardGame.insertToken(1, pablo);
boardGame.print();
boardGame.insertToken(1, marta);
boardGame.print();
boardGame.insertToken(1, pablo);
boardGame.print();