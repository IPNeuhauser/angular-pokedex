import { PokemonCard } from "./pokemonCard"

export type PokemonEvolution = {
  chain:{
    evolves_to: {
      evolves_to:{
        evolves_to:[]
        species:{
          name: string,
        }
      }[]
      species:{
        name:string
      }
    }[],
    species: {
      name: string,
    },
  }
}

export type Pokemons = {
  inicialForm: PokemonCard[],
  firstEvolution: PokemonCard[],
  secondEvolution: PokemonCard[],
}
