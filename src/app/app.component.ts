import { Component,OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  template: `
    <h1>Listes de Pokemons</h1>`
})
export class AppComponent implements OnInit {
  pokemonList = POKEMONS;

  ngOnInit(){
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0])
  }

   selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliquez sur le pokemeon ${pokemon.name}` );
   }
}
