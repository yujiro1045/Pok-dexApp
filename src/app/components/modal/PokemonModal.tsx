import Image from "next/image";
import React from "react";
import { Ruler, Weight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { getPokemonImageUrl } from "@/app/utils/getPokemonImage";
import { Pokemon } from "@/app/types/pokemon";
import { POKEMON_TYPES } from "@/app/constants/pokemonTypes";

type PokemonModalProps = {
  pokemon: Pokemon;
  onClose: () => void;
};

const PokemonModal = ({ onClose, pokemon }: PokemonModalProps) => {
  const primaryType = pokemon.types[0]?.type.name;
  const primaryColor = POKEMON_TYPES[primaryType] || "#6B7280";

  const statNames: { [key: string]: string } = {
    hp: "HP",
    attack: "Ataque",
    defense: "Defensa",
    "special-attack": "Ataque Especial",
    "special-defense": "Defensa Especial",
    speed: "Velocidad",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto scrollbar-hide relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="relative h-48 flex flex-col items-center justify-center text-white"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}dd, ${primaryColor})`,
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X size={18} />
            </motion.button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="relative"
            >
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Image
                  src={getPokemonImageUrl(pokemon.id)}
                  alt={pokemon.name}
                  width={120}
                  height={120}
                  className="drop-shadow-lg"
                />
              </div>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold capitalize mt-2"
            >
              {pokemon.name}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 font-medium"
            >
              #{pokemon.id.toString().padStart(3, "0")}
            </motion.p>
          </div>
          <div className="p-6 space-y-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-2"
            >
              {pokemon.types.map((t, index) => (
                <motion.span
                  key={t.type.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 rounded-full text-white font-semibold text-sm capitalize shadow-lg"
                  style={{ backgroundColor: POKEMON_TYPES[t.type.name] }}
                >
                  {t.type.name}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Ruler size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Altura</p>
                  <p className="font-bold text-gray-900">
                    {pokemon.height / 10} m
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Weight size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Peso</p>
                  <p className="font-bold text-gray-900">
                    {pokemon.weight / 10} kg
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="font-bold text-lg text-gray-900 mb-4">
                Estadísticas Base
              </h3>
              <div className="space-y-3">
                {pokemon.stats.map((stat, index) => {
                  const maxStat = 255;
                  const percentage = (stat.base_stat / maxStat) * 100;

                  return (
                    <motion.div
                      key={stat.stat.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-20 text-sm font-medium text-gray-700">
                        {statNames[stat.stat.name] || stat.stat.name}
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: primaryColor }}
                        />
                      </div>
                      <div className="w-12 text-sm font-bold text-gray-900 text-right">
                        {stat.base_stat}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PokemonModal;
