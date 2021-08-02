import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private pokeApiService: PokeApiService){}

  public name: string;
  public id: string;

  getPokemonInfo(pokemon){
    this.pokeApiService.getPokemon(pokemon).subscribe((pokemonData) => {
      this.name = pokemonData.name;
      this.id = pokemonData.id;
    })
  }
}
