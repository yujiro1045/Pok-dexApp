"use client";
import { Pokemon } from "@/app/types/pokemon";
import React from "react";
import DataTable from "react-data-table-component";
import { pokemonColumns } from "./PokemonColumns";

const customStyles = {
  headRow: {
    style: {
      backgroundColor: "#e0f2fe",
      color: "#374151",
      fontWeight: "bold",
      fontSize: "14px",
    },
  },
  rows: {
    style: {
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e5e7eb",
      fontSize: "14px",
      color: "#1f2937",
    },
    highlightOnHoverStyle: {
      backgroundColor: "#f9fafb",
      cursor: "pointer",
    },
  },
};

type PokemonTableProps = {
  pokemons: Pokemon[];
  onSelectedPokemon: (pokemon: Pokemon) => void;
};

const PokemonTable: React.FC<PokemonTableProps> = ({
  onSelectedPokemon,
  pokemons,
}) => {
  return (
    <div className="w-full overflow-x-auto rounded-2xl shadow-md">
      <div className="min-w-[1100px]">
        <DataTable
          title="Pokémon"
          columns={pokemonColumns(onSelectedPokemon)}
          data={pokemons}
          pagination
          paginationRowsPerPageOptions={[10, 30, 50]}
          fixedHeader
          highlightOnHover
          responsive
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default PokemonTable;
