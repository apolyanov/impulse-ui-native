import { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";

export interface QueryFunction<TData, TError, TVariables> {
  (
    variables: TVariables,
    options?: UseQueryOptions<TData, TError>,
  ): UseQueryResult<TData, TError>;
  execute: (args: TVariables) => Promise<TData>;
}
