import axios from 'axios'

export const pokeApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_POKE_DB_URL,

})

