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
    <div className="flex items-center gap-2">
      <label className="mr-2 font-semibold">Filtrar por tipo:</label>
      <select
        value={selectedType}
        onChange={(e) => onChange(e.target.value)}
        className="border px-3 py-2 rounded text-gray-600"
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
