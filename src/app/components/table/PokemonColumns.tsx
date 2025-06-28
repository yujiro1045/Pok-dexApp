import { POKEMON_TYPES } from "@/app/constants/pokemonTypes";
import { Pokemon } from "@/app/types/pokemon";
import { getPokemonImageUrl } from "@/app/utils/getPokemonImage";
import Image from "next/image";
import React from "react";
import { TableColumn } from "react-data-table-component";

export const pokemonColumns = (
  onSelectPokemon: (pokemon: Pokemon) => void
): TableColumn<Pokemon>[] => [
  {
    name: "Imagen",
    selector: (row: Pokemon) => row.sprites.front_default,
    cell: (row: Pokemon) => (
      <Image
        src={getPokemonImageUrl(row.id)}
        alt={row.name}
        width={100}
        height={100}
      />
    ),
    sortable: false,
  },
  {
    name: "Nombre",
    cell: (row: Pokemon) => (
      <span className=" font-semibold capitalize">{row.name}</span>
    ),
    sortable: true,
  },
  {
    name: "Tipo(s)",
    selector: (row: Pokemon) => row.types.map((t) => t.type.name).join(", "),
    cell: (row: Pokemon) => (
      <div className="flex flex-col items-start gap-1">
        {row.types.map((t) => (
          <span
            key={t.type.name}
            className="px-4 py-2 rounded-full text-xs text-white capitalize font-medium shadow-sm"
            style={{
              backgroundColor: POKEMON_TYPES[t.type.name],
            }}
          >
            {t.type.name}
          </span>
        ))}
      </div>
    ),
    sortable: true,
  },
  {
    name: "Peso (kg)",
    selector: (row: Pokemon) => row.weight / 10,
    sortable: true,
  },
  {
    name: "Altura (m)",
    selector: (row: Pokemon) => row.height / 10,
    sortable: true,
  },
  {
    name: "Experiencia",
    selector: (row: Pokemon) => row.base_experience,
    sortable: true,
  },
  {
    name: "HP",
    selector: (row: Pokemon) =>
      row.stats.find((s) => s.stat.name === "hp")?.base_stat ?? 0,
    sortable: true,
  },
  {
    name: "Ataque",
    selector: (row: Pokemon) =>
      row.stats.find((s) => s.stat.name === "attack")?.base_stat ?? 0,
    sortable: true,
  },
  {
    name: "Defensa",
    selector: (row: Pokemon) =>
      row.stats.find((s) => s.stat.name === "defense")?.base_stat ?? 0,
    sortable: true,
  },
  {
    name: "At. Especial",
    selector: (row: Pokemon) =>
      row.stats.find((s) => s.stat.name === "special-attack")?.base_stat ?? 0,
    sortable: true,
  },
  {
    name: "Def. Especial",
    selector: (row: Pokemon) =>
      row.stats.find((s) => s.stat.name === "special-defense")?.base_stat ?? 0,
    sortable: true,
  },
  {
    name: "Velocidad",
    selector: (row: Pokemon) =>
      row.stats.find((s) => s.stat.name === "speed")?.base_stat ?? 0,
    sortable: true,
  },
  {
    name: "Ver detalles",
    cell: (row: Pokemon) => (
      <button
        className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-1 rounded-full text-sm shadow-sm"
        onClick={() => onSelectPokemon(row)}
      >
        Ver
      </button>
    ),
    ignoreRowClick: true,
  },
];
