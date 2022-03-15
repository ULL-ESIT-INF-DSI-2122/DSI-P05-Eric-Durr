import { describe, it } from 'mocha';
import { expect } from 'chai';
import { PokeDex } from '../../src/ejercicio-1/pokedex.class'; // eslint-disable-line

describe('PokeDex object composition by default', () => {
  const EricsPokedex: PokeDex = new PokeDex();

  it('Created Pokedex object should comprehend a list of Pokemons', () => {
    expect('list' in EricsPokedex).to.be.true;
  });
  it('Created Pokedex object should implement a PokemonPrint interface', () => {
    expect('print' in EricsPokedex).to.be.true;
  });
  it('Pokemons list of the pokedex should be empty', () => {
    expect(EricsPokedex.isEmpty()).to.be.true;
  });
  it('Pokemon can be added to list', () => {
    // expect(EricsPokedex.addPokemon(new Pokemon('elekid'))).to.be.true;
  });
});
