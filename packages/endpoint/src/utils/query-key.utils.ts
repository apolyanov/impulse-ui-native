import type { QueryKey } from "@tanstack/react-query";

import type { BaseVariables, EndpointQueryKey } from "../types";

export function createEndpointQueryKey<TQueryKey extends QueryKey>(
  key: TQueryKey,
  variables: BaseVariables,
  additionalKey: QueryKey = [],
): EndpointQueryKey<TQueryKey> {
  const { signal, ...cacheVariables } = variables;

  return [...key, ...additionalKey, cacheVariables];
}
