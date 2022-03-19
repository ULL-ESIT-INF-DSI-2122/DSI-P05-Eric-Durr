import { describe, it } from 'mocha';
import { expect } from 'chai';
import { ConnectFourPlayer } from '../../src/ejercicio-2/connectFourPlayer.class'; // eslint-disable-line
import { ConnectFourGame } from '../../src/ejercicio-2/connectFourGame.class'; // eslint-disable-line

describe('Player from connect four is described by a class', () => {
  const pablo: ConnectFourPlayer = new ConnectFourPlayer('pablo', 'red');
  const marta: ConnectFourPlayer = new ConnectFourPlayer('marta', 'yellow');
  const boardGame: ConnectFourGame = new ConnectFourGame(pablo, marta);

  it('Board contains two players', () => {
    expect('playerA' in boardGame).to.be.true;
    expect('playerB' in boardGame).to.be.true;
  });
  it('Board is a 6 by 6 matrix', () => {
    expect('slots' in boardGame).to.be.true;
    expect(boardGame.getBoard().length).to.be.eq(6);
    expect(boardGame.getBoard()[0].length).to.be.eq(6);
  });
  // it('Board columns are accesible', () => {
  //   expect(boardGame.getColumn(0)).to.be.eql(
  //     [true, true, true, true, true, true],
  //   );
  //   expect(boardGame.getColumn(1)).to.be.eql(
  //     [true, true, true, true, true, true],
  //   );
  //   expect(boardGame.getColumn(2)).to.be.eql(
  //     [true, true, true, true, true, true],
  //   );
  //   expect(boardGame.getColumn(3)).to.be.eql(
  //     [true, true, true, true, true, true],
  //   );
  //   expect(boardGame.getColumn(4)).to.be.eql(
  //     [true, true, true, true, true, true],
  //   );
  //   expect(boardGame.getColumn(5)).to.be.eql(
  //     [true, true, true, true, true, true],
  //   );
  // });
  it('Board implements tie status from GameStatus interface', () => {
    expect('isTie' in boardGame).to.be.true;
  });
  it('Board implements PrintableGame interface', () => {
    expect('print' in boardGame).to.be.true;
  });
  it('Board implements GameActions interface', () => {
    expect('runRound' in boardGame).to.be.true;
  });
  it('Board is printed as expected', () => {
    boardGame.print();
  });

  it('pablo inserts tokens untill fill column 1 and is printed as expected', () => {
    expect(boardGame.insertToken(1, pablo)).to.be.true;
    expect(boardGame.insertToken(1, pablo)).to.be.true;
    expect(boardGame.insertToken(1, pablo)).to.be.true;
    expect(boardGame.insertToken(1, pablo)).to.be.true;
    expect(boardGame.insertToken(1, pablo)).to.be.true;
    expect(boardGame.insertToken(1, pablo)).to.be.true;
    expect(boardGame.insertToken(1, pablo)).to.be.false;
    boardGame.print();
  });
  it('marta inserts tokens untill fill column 2 and is printed as expected', () => {
    expect(boardGame.insertToken(2, marta)).to.be.true;
    expect(boardGame.insertToken(2, marta)).to.be.true;
    expect(boardGame.insertToken(2, marta)).to.be.true;
    expect(boardGame.insertToken(2, marta)).to.be.true;
    expect(boardGame.insertToken(2, marta)).to.be.true;
    expect(boardGame.insertToken(2, marta)).to.be.true;
    expect(boardGame.insertToken(2, marta)).to.be.false;
    boardGame.print();
  });
});
