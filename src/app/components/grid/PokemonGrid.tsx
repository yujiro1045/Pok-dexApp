import Image from "next/image";
import React from "react";
import { getPokemonImageUrl } from "@/app/utils/getPokemonImage";
import { Pokemon } from "@/app/types/pokemon";
import { POKEMON_TYPES } from "@/app/constants/pokemonTypes";

type PokemonGridProps = {
  onSelectedPokemon: (pokemon: Pokemon) => void;
  pokemons: Pokemon[];
};

const PokemonGrid = ({ onSelectedPokemon, pokemons }: PokemonGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {pokemons.map((pokemon) => {
        const mainType = pokemon.types[0].type.name;
        const bgColor = POKEMON_TYPES[mainType];

        return (
          <div
            key={pokemon.id}
            className="relative bg-gray-200 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer overflow-hidden"
            onClick={() => onSelectedPokemon(pokemon)}
          >
            <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-200 text-black flex items-center justify-center text-xs font-semibold z-10 shadow">
              #{pokemon.id}
            </span>

            <div
              className="flex justify-center items-center h-32 rounded-t-2xl"
              style={{ backgroundColor: bgColor }}
            >
              <Image
                src={getPokemonImageUrl(pokemon.id)}
                alt={pokemon.name}
                width={100}
                height={100}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="p-4">
              <h2 className="text-center text-lg capitalize font-bold text-gray-800">
                {pokemon.name}
              </h2>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {pokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className="px-3 py-1 rounded-full text-white text-xs font-semibold shadow-md border border-white/20"
                    style={{
                      backgroundColor: POKEMON_TYPES[type.type.name],
                    }}
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonGrid;
