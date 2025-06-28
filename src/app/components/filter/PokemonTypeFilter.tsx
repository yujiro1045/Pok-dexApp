import { getPokemonsTypes } from "@/app/utils/getPokemonsTypes";

type PokemonTypeFilterProps = {
  selectedType: string;
  onChange: (type: string) => void;
};

const PokemonTypeFilter = ({
  selectedType,
  onChange,
}: PokemonTypeFilterProps) => {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor="pokemon-type-filter" className="text-sm font-semibold ">
        Tipo:
      </label>
      <select
        id="pokemon-type-filter"
        value={selectedType}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        <option value="">Todos</option>
        {getPokemonsTypes().map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PokemonTypeFilter;
