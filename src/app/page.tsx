"use client";

import { usePokemonData } from "./hooks/usePokemonData";
import PokemonGrid from "./components/grid/PokemonGrid";
import PokemonModal from "./components/modal/PokemonModal";
import PokemonTable from "./components/table/PokemonTable";
import ToggleViewButton from "./components/buttons/ToggleViewButton";
import PokemonTypeFilter from "./components/filter/PokemonTypeFilter";

export default function Home() {
  const {
    filtered,
    handleFilterChange,
    handleSelectedPokemon,
    loading,
    selectedPokemon,
    selectedType,
    setSelectedPokemon,
    toggleViewMode,
    viewMode,
  } = usePokemonData();

  return (
    <main className="p-4">
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Pokedex (Primera Generación)
        </h1>

        <div className="mb-6 flex flex-wrap items-center gap-4">
          <PokemonTypeFilter
            selectedType={selectedType}
            onChange={handleFilterChange}
          />

          <ToggleViewButton viewMode={viewMode} onToggle={toggleViewMode} />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[60vh] gap-4">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-lg font-semibold">Cargando...</p>
          </div>
        ) : viewMode === "table" ? (
          <PokemonTable
            pokemons={filtered}
            onSelectedPokemon={handleSelectedPokemon}
          />
        ) : (
          <PokemonGrid
            pokemons={filtered}
            onSelectedPokemon={handleSelectedPokemon}
          />
        )}

        {selectedPokemon && (
          <PokemonModal
            pokemon={selectedPokemon}
            onClose={() => setSelectedPokemon(null)}
          />
        )}
      </div>
    </main>
  );
}
