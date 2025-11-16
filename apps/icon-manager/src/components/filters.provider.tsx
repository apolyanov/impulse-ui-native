import { useMemo, useState, type PropsWithChildren } from "react";
import { FiltersContext } from "../constants";

export const FiltersProvider = (props: PropsWithChildren) => {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const value = useMemo(
    () => ({ query, setQuery, activeFilter, setActiveFilter }),
    [query, activeFilter]
  );

  return (
    <FiltersContext.Provider value={value}>
      {props.children}
    </FiltersContext.Provider>
  );
};
