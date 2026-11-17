import type { QueryFunctionContext, QueryKey } from "@tanstack/react-query";

import type { EndpointCallbacks } from "./callback.types";
import type { HttpRequestOptions } from "./http.types";
import type { EndpointQueryKey } from "./query.types";

export interface BaseVariables<Data = any> extends HttpRequestOptions {
  data?: Data;
}

type Primitive = string | number | boolean;

export interface PaginationParams {
  limit?: number;
  offset?: number;
  direction?: "forward" | "backward";
}

export type QueryParams = PaginationParams & {
  [key: string]: Primitive | Primitive[] | null | undefined;
};

export interface CommonEndpointRequestProps<
  TData,
  TError,
  TQueryKey extends QueryKey = QueryKey,
> extends EndpointCallbacks<TData, TError> {
  path: string;
  key: TQueryKey;
  headers?: Readonly<Record<string, string>>;
}

export interface QueryEndpointRequest<
  TData,
  TError,
  TVariables,
  TQueryKey extends QueryKey = QueryKey,
> extends CommonEndpointRequestProps<TData, TError, TQueryKey> {
  variablesFn?: (
    context: QueryFunctionContext<EndpointQueryKey<TQueryKey>>,
    variables: TVariables,
  ) => TVariables;
}

export interface InfiniteQueryEndpointRequest<
  TData,
  TError,
  TVariables,
  TPageParam extends PaginationParams,
  TQueryKey extends QueryKey = QueryKey,
> extends CommonEndpointRequestProps<TData, TError, TQueryKey> {
  variablesFn?: (
    context: QueryFunctionContext<EndpointQueryKey<TQueryKey>, TPageParam>,
    variables: TVariables,
  ) => TVariables;
}

export interface EndpointRequest<
  TData,
  TError,
> extends CommonEndpointRequestProps<TData, TError> {
  method?: "post" | "patch" | "put" | "delete";
}
