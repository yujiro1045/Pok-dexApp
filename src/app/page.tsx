"use client";
import { useEffect, useState } from "react";
import { Pokemon } from "./types/pokemon";
import { fetchAllPokemon } from "./libs/pokeApi";
import Image from "next/image";
import { getPokemonImageUrl } from "./utils/getPokemonImage";

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemon = async () => {
      const data = await fetchAllPokemon();
      setPokemonList(data);
      setLoading(false);
    };

    loadPokemon();
  }, []);
  return (
    <main className="p-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">
          Pokédex (Primera Generación)
        </h1>
      </div>

      {loading ? (
        <p>Cargando Pokémon...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {pokemonList.map((pokemon) => (
            <div
              key={pokemon.id}
              className="border p-2 rounded shadow hover:shadow-lg transition"
            >
              <Image
                src={getPokemonImageUrl(pokemon.id)}
                alt={pokemon.name}
                width={120}
                height={120}
              />
              <h2 className="capitalize text-center mt-2 font-medium">
                {pokemon.name}
              </h2>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
