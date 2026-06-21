import type { Axios, AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import type {
  BaseVariables,
  QueryEndpointRequest,
  QueryFunction,
} from "../types";
import { createRequest } from "../utils";

export function createQueryFactory(client: Axios) {
  return function createQuery<
    TData,
    TError = AxiosError,
    TVariables extends BaseVariables = BaseVariables,
  >(
    config: QueryEndpointRequest<TData, TError, TVariables>,
  ): QueryFunction<TData, TError, TVariables> {
    const request = createRequest(client, config);

    const use: QueryFunction<TData, TError, TVariables> = function (
      variables: TVariables,
      options?: UseQueryOptions<TData, TError>,
    ) {
      return useQuery<TData, TError>({
        ...options,
        queryKey: [config.key, options?.queryKey],
        queryFn: (context) =>
          request(
            config.variablesFn
              ? config.variablesFn(context, variables)
              : variables,
          ),
      });
    };

    use.execute = request;

    return use;
  };
}
