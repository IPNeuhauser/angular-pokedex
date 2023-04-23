export type PokemonSpecie = {
  egg_groups: {
    name: string
  }[],
  evolution_chain: {
    url: string
  },
  gender_rate: number,
  is_baby: boolean,
  is_legendary: boolean,
  is_mythical: boolean,
  varieties: {
    pokemon: {
      name:string,
      url:string
    }
  }[],
}

