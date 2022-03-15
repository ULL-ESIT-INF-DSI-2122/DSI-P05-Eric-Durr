import { PokemonType, Measures, Stats } from "./pokemon.interfaces"; // eslint-disable-line

export class Pokemon {
  protected readonly name: string;

  protected readonly shape: Measures;

  protected readonly type: PokemonType;

  protected stats: Stats;

  constructor(
    name: string,
    shape: Measures,
    type: PokemonType,
    stats: Stats,
  ) {
    this.name = name;
    this.shape = shape;
    this.type = type;
    this.stats = stats;
  }

  getName(): string {
    return this.name;
  }

  getShape(): [number, number] {
    return [this.shape.height, this.shape.height];
  }

  getType(): PokemonType {
    return this.type;
  }

  getStats(): [number, number, number, number] {
    return [
      this.stats.hp,
      this.stats.atk,
      this.stats.def,
      this.stats.spd,
    ];
  }
}
