import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../../src/ejercicio-1/pokemon.interface'; // eslint-disable-line

describe('Pokemon info is shaped through an interface', () => {
  const dummy: Pokemon = {
    name: '',
    measures: {
      height: 0,
      weight: 0,
    },
    type: 'fire',
    stats: {
      atk: 0,
      def: 0,
      spd: 0,
      hp: 0,
    },
  };
  it('Pokemon interface name should exist and be a string', () => {
    expect('name' in dummy).to.be.true;
    expect(typeof dummy.name).to.eq('string');
  });
  it('Pokemon interface measures should exist and be an object of weight and height', () => {
    expect('measures' in dummy).to.be.true;
    expect(typeof dummy.measures).to.eq('object');
    expect(typeof dummy.measures.weight).to.eq('number');
    expect(typeof dummy.measures.height).to.eq('number');
  });
  it('Pokemon interface type should exist and be a PokemonType variable', () => {
    expect('type' in dummy).to.be.true;
    expect(typeof dummy.type).to.eq('string');
  });
  it('Pokemon interface stats should exist and be an objects of stats', () => {
    expect('stats' in dummy).to.be.true;
    expect(typeof dummy.stats).to.eq('object');
    expect(typeof dummy.stats.hp).to.eq('number');
    expect(typeof dummy.stats.atk).to.eq('number');
    expect(typeof dummy.stats.def).to.eq('number');
    expect(typeof dummy.stats.spd).to.eq('number');
  });
});
