export type PokemonCard = {
  name:string,
  id:number,
  types:{
    type:{
      name:string,
    }
  }[],
  type:string,
}
