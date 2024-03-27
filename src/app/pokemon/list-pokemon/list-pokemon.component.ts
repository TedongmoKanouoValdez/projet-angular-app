import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit{
  pokemonList: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ){}

    ngOnInit(){
      // elle affiche la liste de pokemon dans notre proprieté pokemonList et subscribe pour l'ecoute des données emises
      this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonList = this.pokemonList);
    }
  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemons', pokemon.id])
  }
}
