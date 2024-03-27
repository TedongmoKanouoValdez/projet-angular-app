import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {
  //permet de faire la recherche en fonction des lettres du champs de recherche de façon successive
  searchTerms = new Subject<string>();
  //{...pokemonList(a)...pokemonList(ab)...}
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      //{..."a"."ab"..."abz"."ab"..."abc"....}
      debounceTime(300),
      //{....."ab"......."ab"........"abc"}
      distinctUntilChanged(),
      //{....."ab".........."abc"......}
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      //{.....pokemonList<"ab">...............pokemonList<"abc">....}
    );
  }

  search(term : string){
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon){
    const link = ['/pokemons', pokemon.id];
    this.router.navigate(link)
  }
}
