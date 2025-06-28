import { POKEMON_TYPES } from "../constants/pokemonTypes";

export const getPokemonsTypes = (): string[] => {
  return Object.keys(POKEMON_TYPES);
};
