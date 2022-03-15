import * as fs from 'fs';
import { Pokemon } from "./pokemon.class"; // eslint-disable-line

const bulbasaur: Pokemon = new Pokemon(
  'meowth',
  {
    height: 0.7,
    weight: 6.9,
  },
  'grass',
  {
    atk: 49,
    def: 49,
    spd: 45,
    hp: 45,
  },
);

function printPokemon(pokemon: Pokemon): void {
  console.log(`Pokemon: ${pokemon.getName()}`);
  try {
    const result = fs.readFileSync(`./images/${pokemon.getName()}.txt`, 'utf8');
    console.log(result);
  } catch {
    console.log('?');
  }
  console.log(`HP: ${pokemon.getStats()[0]} | [${Array(pokemon.getStats()[0]).fill('#').join('')}]`);
}

printPokemon(bulbasaur);
