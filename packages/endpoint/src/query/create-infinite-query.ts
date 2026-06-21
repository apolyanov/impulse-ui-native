import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import { Axios, AxiosError } from "axios";

import {
  BaseVariables,
  InfiniteQueryEndpointRequest,
  PaginationParams,
} from "../types";
import { createRequest } from "../utils";

export const createInfiniteQueryFactory = (client: Axios) => {
  return <
    TPage,
    TError = AxiosError,
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
    const request = createRequest(client, config);

    const use = (
      variables: TVariables,
      options: Omit<
        UseInfiniteQueryOptions<
          TPage,
          TError,
          InfiniteData<TPage>,
          TQueryKey,
          TPageParam
        >,
        "queryKey"
      >,
    ) => {
      return useInfiniteQuery<
        TPage,
        TError,
        InfiniteData<TPage>,
        TQueryKey,
        TPageParam
      >({
        ...options,
        queryKey: config.key,
        queryFn: (context) =>
          request(
            config.variablesFn
              ? config.variablesFn(context, variables)
              : variables,
          ),
      });
    };

    return use;
  };
};
