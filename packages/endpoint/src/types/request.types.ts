import type {
  Query,
  QueryFunctionContext,
  QueryKey,
} from "@tanstack/react-query";

export interface BaseVariables<Data = any> {
  data?: Data;
  params?: QueryParams;
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
> {
  path: string;
  key: TQueryKey;
  onSuccess?: (data: TData) => Promise<void> | void;
  onError?: (error: TError) => Promise<void> | void;
}

export interface QueryEndpointRequest<
  TData,
  TError,
  TVariables,
  TQueryKey extends QueryKey = QueryKey,
> extends CommonEndpointRequestProps<TData, TError> {
  variablesFn?: (
    context: QueryFunctionContext<TQueryKey>,
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
    context: QueryFunctionContext<TQueryKey, TPageParam>,
    variables: TVariables,
  ) => TVariables;
}

export interface EndpointRequest<
  TData,
  TError,
> extends CommonEndpointRequestProps<TData, TError> {
  method?: "post" | "patch" | "put" | "delete";
  headers?: Record<string, string>;
}
