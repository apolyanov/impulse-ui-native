import type { Query } from "@tanstack/react-query";

export interface BaseVariables<Data = any> {
  data?: Data;
  params?: QueryParams;
}

type Primitive = string | number | boolean;

type PaginationParams = {
  limit?: number;
  offset?: number;
};

export type QueryParams = PaginationParams & {
  [key: string]: Primitive | Primitive[] | null | undefined;
};

export interface CommonEndpointRequestProps<TData, TError> {
  path: string;
  key: Query<TData, TError>["queryKey"];
}

export interface EndpointRequest<TData, TError>
  extends CommonEndpointRequestProps<TData, TError> {
  method?: "post" | "patch" | "put" | "delete";
}

export type QueryEndpointRequest<TData, TError> = CommonEndpointRequestProps<
  TData,
  TError
>;
