import { useMemo } from "react";

import { useControllableState } from "@impulse-ui-native/core";

import type { PrimitiveValue } from "../types";
import type { UseSelectSearchProps } from "../types/use-select-search.types";

export function useSelectSearch<Value extends PrimitiveValue>({
  options,
  searchable = false,
  searchValue,
  onSearchChange,
  optionsLoading = false,
}: UseSelectSearchProps<Value>) {
  const [query, setQuery] = useControllableState({
    prop: searchValue,
    defaultProp: "",
    onChange: onSearchChange,
  });

  const normalizedQuery = searchable ? query.trim().toLowerCase() : "";
  const shouldFilterOptions =
    searchValue === undefined && Boolean(normalizedQuery);
  const visibleOptions = useMemo(
    () =>
      shouldFilterOptions
        ? options.filter((option) =>
            option.label.toLowerCase().includes(normalizedQuery),
          )
        : options,
    [normalizedQuery, options, shouldFilterOptions],
  );

  const showEmptyState =
    !optionsLoading && visibleOptions.length === 0 && Boolean(normalizedQuery);

  return useMemo(
    () => ({
      query,
      setQuery,
      normalizedQuery,
      visibleOptions,
      showEmptyState,
    }),
    [query, setQuery, normalizedQuery, visibleOptions, showEmptyState],
  );
}
