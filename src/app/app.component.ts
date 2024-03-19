import { Component,OnInit } from '@angular/core';
import { Pokemon } from './pokemon/pokemon';
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent  {
  // pokemonList: Pokemon[] = POKEMONS;
  // pokemonSelected: Pokemon|undefined;

  // ngOnInit(){
  //   console.table(this.pokemonList);
  // }

  //  selectPokemon(pokemonId: string){
  //   //const index: number =+(event.target as HTMLInputElement).value;
  //   const id = +pokemonId;
  //   const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
  //   if(pokemon){
  //     console.log(`Vous avez demandé le pokemeon ${pokemon.name}` );
  //     this.pokemonSelected = pokemon;
  //   } else {
  //     console.log(`Vous avez demandé un pokemeon qui n'existe pas.` );
  //     this.pokemonSelected = pokemon;
  //   }
  //  }
}
