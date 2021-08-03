import { Injectable } from "@angular/core"
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { PokemonApi } from '../interface/pokemon.interface'


@Injectable({
    providedIn: "root"
})
export class PokeApiService {
    constructor(private http:HttpClient){}

    getAllPokemon() {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/`)
                .pipe(
                    map((pokemonData: PokemonApi) => {
                        return pokemonData.results
                    })
                )
                
    }
}

