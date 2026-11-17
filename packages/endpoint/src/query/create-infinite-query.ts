import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";

import type { HttpClient } from "../http";
import {
  BaseVariables,
  EndpointInfiniteQueryOptions,
  EndpointQueryKey,
  InfiniteQueryEndpointRequest,
  PaginationParams,
} from "../types";
import { createRequest } from "../utils";
import { createEndpointQueryKey } from "../utils/query-key.utils";

export const createInfiniteQueryFactory = (client: HttpClient) => {
  return <
    TPage,
    TError = unknown,
    TVariables extends BaseVariables = BaseVariables,
    TPageParam extends PaginationParams = PaginationParams,
    TQueryKey extends QueryKey = QueryKey,
  >(
    config: InfiniteQueryEndpointRequest<
      TPage,
      TError,
      TVariables,
      TPageParam,
      TQueryKey
    >,
  ) => {
    const use = (
      variables: TVariables,
      options: EndpointInfiniteQueryOptions<
        TPage,
        TError,
        TQueryKey,
        TPageParam
      >,
    ) => {
      const { onSuccess, onError, ...queryOptions } = options;
      const request = createRequest<TPage, TError, TVariables>(client, config, {
        onSuccess,
        onError,
      });

      return useInfiniteQuery<
        TPage,
        TError,
        InfiniteData<TPage>,
        EndpointQueryKey<TQueryKey>,
        TPageParam
      >({
        ...queryOptions,
        queryKey: createEndpointQueryKey(
          config.key,
          variables,
          queryOptions.queryKey,
        ),
        queryFn: (context) => {
          let requestVariables = variables;

          if (config.variablesFn) {
            requestVariables = config.variablesFn(context, variables);
          } else if (
            typeof context.pageParam === "object" &&
            context.pageParam !== null
          ) {
            requestVariables = {
              ...variables,
              params: { ...variables.params, ...context.pageParam },
            };
          }

          return request({ ...requestVariables, signal: context.signal });
        },
      });
    };

    return use;
  };
};
