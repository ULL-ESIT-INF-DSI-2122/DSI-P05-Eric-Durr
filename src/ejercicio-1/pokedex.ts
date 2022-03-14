import * as fs from 'fs';
import { Pokemon } from "./pokemon.interfaces"; // eslint-disable-line

const bulbasaur: Pokemon = {
  name: 'tyranitar',
  measures: {
    height: 0.7,
    weight: 6.9,
  },
  type: 'grass',
  stats: {
    atk: 49,
    def: 49,
    spd: 45,
    hp: 45,
  },
};

function printPokemon(pokemon: Pokemon): void {
  console.log(`Pokemon: ${pokemon.name}`);
  console.log(fs.readFileSync(`./images/${pokemon.name}.txt`, 'utf8'));
  console.log(`HP: ${pokemon.stats.hp} | [${Array(pokemon.stats.hp).fill('#').join('')}]`);
}

printPokemon(bulbasaur);
