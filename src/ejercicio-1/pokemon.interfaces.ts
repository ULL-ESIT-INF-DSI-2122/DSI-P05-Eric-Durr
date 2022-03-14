export type PokemonType = 'fire' | 'grass' | 'water' | 'electric';
export interface Pokemon {
  name: string;
  measures: {
    weight: number,
    height: number,
  };
  type: PokemonType;
  stats: {
    hp: number,
    atk: number,
    def: number,
    spd: number,
  };
}

export interface PrintPokemon {
  print(): void;
}
