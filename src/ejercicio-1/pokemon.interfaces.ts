type PokemonType = 'fire' | 'grass' | 'water' | 'electric' | 'normal';

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
  speak(): void;
  attack(): void;
  receiveDamage(): void;
  effectiveness(): void;
}

export {
  PokemonType,
  Measures,
  Stats,
  PokemonPrint,
  PokemonActions,
};
