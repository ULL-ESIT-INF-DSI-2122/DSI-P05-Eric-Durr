import { Pokemon } from './pokemon.class';
import { PokemonPrint } from './pokemon.interfaces';

export class PokeDex implements PokemonPrint {
  private list: Pokemon[];

  constructor(list: Pokemon[] = []) {
    this.list = list;
  }

  myList(): Pokemon[] {
    return this.list;
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }

  print(): void {
    console.log(this.list);
  }
}
