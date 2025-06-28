import { Pokemon } from "../types/pokemon";

export const fetchAllPokemon = async (): Promise<Pokemon[]> => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await res.json();

  const detailedData: Pokemon[] = await Promise.all(
    data.results.map((pokemon: { name: string; url: string }) =>
      fetch(pokemon.url).then((res) => res.json() as Promise<Pokemon>)
    )
  );

  return detailedData;
};
