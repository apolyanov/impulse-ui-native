import type {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import type { EndpointCallbacks } from "./callback.types";

export type EndpointQueryKey<TQueryKey extends QueryKey = QueryKey> = readonly [
  ...TQueryKey,
  ...unknown[],
];

export type EndpointQueryOptions<TData, TError> = Omit<
  UseQueryOptions<TData, TError>,
  "queryFn" | "queryKey"
> & { queryKey?: QueryKey } & EndpointCallbacks<TData, TError>;

export type EndpointInfiniteQueryOptions<
  TPage,
  TError,
  TQueryKey extends QueryKey,
  TPageParam,
> = Omit<
  UseInfiniteQueryOptions<
    TPage,
    TError,
    InfiniteData<TPage>,
    EndpointQueryKey<TQueryKey>,
    TPageParam
  >,
  "queryFn" | "queryKey"
> & { queryKey?: QueryKey } & EndpointCallbacks<TPage, TError>;

export interface QueryFunction<TData, TError, TVariables> {
  (
    variables: TVariables,
    options?: EndpointQueryOptions<TData, TError>,
  ): UseQueryResult<TData, TError>;
  execute: (args: TVariables) => Promise<TData>;
}
