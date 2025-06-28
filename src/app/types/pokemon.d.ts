export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name:
        | "hp"
        | "attack"
        | "defense"
        | "special-attack"
        | "special-defense"
        | "speed";
      url: string;
    };
  }[];
}
