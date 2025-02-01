import { PokemonSpeciesResponse } from "../../interfaces/pokemon/pokemon-species-response";
import { Pokemon } from "../../interfaces/pokemon/pokemon.interface";

export class PokemonMapper {
    static fromPokemonSpeciesToPokemon = (pokemon: PokemonSpeciesResponse): Pokemon => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        }
    }
}