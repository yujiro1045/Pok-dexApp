import { useEffect, useState } from "react";
import { Pokemon } from "@/app/types/pokemon";
import { fetchAllPokemon } from "../libs/pokeApi";

export function usePokemonData() {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [selectedType, setSelectedType] = useState<string>("");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");

  useEffect(() => {
    const getData = async () => {
      const all = await fetchAllPokemon();
      setData(all);
      setFiltered(all);
      setLoading(false);
    };
    getData();
  }, []);

  const handleSelectedPokemon = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleFilterChange = (type: string) => {
    setSelectedType(type);

    if (!type) {
      setFiltered(data);
      return;
    }

    const filteredData = data.filter((pokemon) =>
      pokemon.types.some((t) => t.type.name === type)
    );

    setFiltered(filteredData);
  };

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "table" ? "grid" : "table"));
  };

  return {
    data,
    loading,
    filtered,
    selectedPokemon,
    selectedType,
    viewMode,
    handleSelectedPokemon,
    handleFilterChange,
    toggleViewMode,
    setSelectedPokemon,
  };
}
