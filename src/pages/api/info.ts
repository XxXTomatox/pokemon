import axios from "axios"

export const pokedexApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})