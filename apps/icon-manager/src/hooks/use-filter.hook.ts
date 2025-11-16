import { useContext } from "react";
import { FiltersContext } from "../constants";
import type { FiltersContextValue } from "../types";

export function useFilters(): FiltersContextValue {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }

  return context;
}
