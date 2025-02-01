import { pokeApi } from "@/core/api/poke-api";
import { PokemonSpeciesResponse } from "@/infraestructure/interfaces/pokemon/pokemon-species-response";

export const pokemonActions = async () => {
    try {
        // const {data} =  await pokeApi.get<PokemonSpeciesResponse>()
    } catch (error) {
        console.log(error);
        throw 'Cannot load pokemon'
    }
}