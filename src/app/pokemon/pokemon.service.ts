import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokemonService {

 getPokemonList(): Pokemon[]{
  return POKEMONS;
 }

 getPokemonById(pokemonId: number): Pokemon|undefined {
  return POKEMONS.find(Pokemon => Pokemon.id == pokemonId);
 }

 getPokemonTypeList():string []{
  return [
    'Plante',
    'Eau',
    'Insecte',
    'Normal',
    'Electrik',
    'Poisson',
    'Fée',
    'Vol',
    'Combat',
    'Psy'
  ];
 }
}
