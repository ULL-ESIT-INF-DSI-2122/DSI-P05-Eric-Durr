import { describe, it } from 'mocha';
import { expect } from 'chai';
import { ConnectFourPlayer } from '../../src/ejercicio-2/connectFourPlayer.class'; // eslint-disable-line

describe('Player from connect four is described by a class', () => {
  let defaultPlayer: ConnectFourPlayer = new ConnectFourPlayer();

  it('Player should have a name', () => {
    expect('name' in defaultPlayer).to.be.true;
    expect(defaultPlayer.getName()).to.be.eq('');
  });
  it('Player should have a color', () => {
    expect('color' in defaultPlayer).to.be.true;
    expect(defaultPlayer.getColor()).to.be.eq('');
  });
  it('Player should have an empty list of tokens positions', () => {
    expect('tokens' in defaultPlayer).to.be.true;
    expect(defaultPlayer.getTokens()).to.be.eql([]);
  });
  it('Player should implement game interfaces isWinner method', () => {
    expect('isWinner' in defaultPlayer).to.be.true;
    expect(defaultPlayer.isWinner()).to.be.false;
  });
  it('Player should implement game interfaces makeMove method', () => {
    expect('makeMove' in defaultPlayer).to.be.true;
  });

  it('Player can make a move and store new token', () => {
    expect(defaultPlayer.makeMove({ i: 0, j: 0 })).to.be.true;
  });
  it('Player cant make the same move', () => {
    expect(defaultPlayer.makeMove({ i: 0, j: 0 })).to.be.false;
  });

  it('Player should win when four tokens are row connected', () => {
    defaultPlayer = new ConnectFourPlayer();
    expect(defaultPlayer.isWinner()).to.be.true;
    expect(defaultPlayer.makeMove({ i: 0, j: 0 })).to.be.true;
    expect(defaultPlayer.makeMove({ i: 0, j: 1 })).to.be.true;
    expect(defaultPlayer.makeMove({ i: 0, j: 2 })).to.be.true;
    expect(defaultPlayer.makeMove({ i: 0, j: 3 })).to.be.true;
    expect(defaultPlayer.isWinner()).to.be.true;

  });
  it('Player should win when four tokens are column connected', () => {
    defaultPlayer = new ConnectFourPlayer();
    expect(defaultPlayer.isWinner()).to.be.true;
    expect(defaultPlayer.makeMove({ i: 0, j: 0 })).to.be.true;
    expect(defaultPlayer.makeMove({ i: 1, j: 0 })).to.be.true;
    expect(defaultPlayer.makeMove({ i: 2, j: 0 })).to.be.true;
    expect(defaultPlayer.makeMove({ i: 3, j: 0 })).to.be.true;
    expect(defaultPlayer.isWinner()).to.be.true;
  });
  it('Player should win when four tokens are up diagonaly connected', () => {
    defaultPlayer = new ConnectFourPlayer();
    expect(defaultPlayer.isWinner()).to.be.true;
    expect(defaultPlayer.makeMove({ i: 6, j: 0 })).to.be.true;
    expect(defaultPlayer.makeMove({ i: 5, j: 1 })).to.be.true;
    expect(defaultPlayer.makeMove({ i: 4, j: 2 })).to.be.true;
    expect(defaultPlayer.makeMove({ i: 3, j: 3 })).to.be.true;
    expect(defaultPlayer.isWinner()).to.be.true;
  });
  it('Player should win when four tokens are down diagonaly connected', () => {
    defaultPlayer = new ConnectFourPlayer();
    expect(defaultPlayer.isWinner()).to.be.true;
    expect(defaultPlayer.makeMove({ i: 0, j: 0 })).to.be.true;
    expect(defaultPlayer.makeMove({ i: 1, j: 1 })).to.be.true;
    expect(defaultPlayer.makeMove({ i: 2, j: 2 })).to.be.true;
    expect(defaultPlayer.makeMove({ i: 3, j: 3 })).to.be.true;
    expect(defaultPlayer.isWinner()).to.be.true;
  });
});
