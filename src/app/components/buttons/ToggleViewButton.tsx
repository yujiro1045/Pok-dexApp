"use client";

import React from "react";

type ToggleViewButtonProps = {
  viewMode: "table" | "grid";
  onToggle: () => void;
};

const ToggleViewButton = ({ viewMode, onToggle }: ToggleViewButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-md transition-colors duration-300 text-sm font-semibold"
    >
      Cambiar a{" "}
      {viewMode === "table" ? "Vista de Cuadrícula" : "Vista de Tabla"}
    </button>
  );
};

export default ToggleViewButton;
