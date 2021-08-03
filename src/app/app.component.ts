import { Component, OnInit } from '@angular/core';
import { Pokemon } from './interface/pokemon.interface';
import { PokeApiService } from './services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private pokeApiService: PokeApiService){}

  public pokemonSet: Pokemon[];

  ngOnInit(){
    this.getPokemonInfo()
  }

  getPokemonInfo(){
    this.pokeApiService.getAllPokemon().subscribe((pokemonData) => {
      this.pokemonSet = pokemonData
    })
  }
}
