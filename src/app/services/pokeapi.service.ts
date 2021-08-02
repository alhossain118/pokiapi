import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { Pokemon } from '../interface/pokemon.interface'
@Injectable({
    providedIn: "root"
})
export class PokeApiService {
    constructor(private http:HttpClient){}

    getPokemon(pokemon) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                .pipe(
                    map((pokemonData: Pokemon) => {
                        return {
                            name: pokemonData.name,
                            id: pokemonData.id
                        }
                    })
                )
                
    }
}

