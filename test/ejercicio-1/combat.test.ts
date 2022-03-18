import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Combat } from '../../src/ejercicio-1/combat.class'; // eslint-disable-line
import { Pokemon } from '../../src/ejercicio-1/pokemon.class'; // eslint-disable-line

describe('Combat between two pokemons', () => {
  const charmander: Pokemon = new Pokemon(
    'charmander',
    { height: 5, weight: 5 },
    'fire',
    {
      hp: 200,
      atk: 10,
      def: 10,
      spd: 10,
    },
  );
  const pikachu: Pokemon = new Pokemon(
    'pikachu',
    { height: 5, weight: 5 },
    'electric',
    {
      hp: 400,
      atk: 10,
      def: 10,
      spd: 10,
    },
  );

  const combat: Combat = new Combat(pikachu, charmander);

  it('Created Combat should include the first fighter', () => {
    expect('firstFighter' in combat).to.be.true;
  });
  it('Created Combat should include the second fighter', () => {
    expect('secondFighter' in combat).to.be.true;
  });
  it('Created Combat should implement a PokemonPrint interface', () => {
    expect('print' in combat).to.be.true;
  });
  it('Attacking in the combat with first pokemon should change hp in the other', () => {
    expect(pikachu.getStats()[0]).to.be.eq(400);
    combat.print();
    combat.attack(pikachu);
    combat.print();
    expect(pikachu.getStats()[0]).to.be.eq(350);
  });

  // it('start method simulates the combat between pikachu and charmander', () => {
  //   expect('start' in combat).to.be.true;
  // });
});
