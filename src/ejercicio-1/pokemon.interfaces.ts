import { Pokemon } from './pokemon.class'; // eslint-disable-line

type PokemonType = 'fire' | 'leaf' | 'water' | 'electric' | 'normal';

type Measures = {
  weight: number,
  height: number,
};

type Stats = {
  hp: number,
  atk: number,
  def: number,
  spd: number,
};

interface PokemonPrint {
  print(): void;
}

interface PokemonActions {
  speak?(): void;
  attack(attacker: Pokemon): void;
  effectiveness(attacker: Pokemon, receiver: Pokemon): 1 | 0.5 | 2 ;
}

export {
  PokemonType,
  Measures,
  Stats,
  PokemonPrint,
  PokemonActions,
};
