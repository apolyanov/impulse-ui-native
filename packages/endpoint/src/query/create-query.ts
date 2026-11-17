import { useQuery } from "@tanstack/react-query";

import type { HttpClient } from "../http";
import type {
  BaseVariables,
  EndpointQueryOptions,
  QueryEndpointRequest,
  QueryFunction,
} from "../types";
import { createRequest } from "../utils";
import { createEndpointQueryKey } from "../utils/query-key.utils";

export function createQueryFactory(client: HttpClient) {
  return function createQuery<
    TData,
    TError = unknown,
    TVariables extends BaseVariables = BaseVariables,
  >(
    config: QueryEndpointRequest<TData, TError, TVariables>,
  ): QueryFunction<TData, TError, TVariables> {
    const request = createRequest(client, config);

    const use: QueryFunction<TData, TError, TVariables> = function (
      variables: TVariables,
      options?: EndpointQueryOptions<TData, TError>,
    ) {
      const { onSuccess, onError, ...queryOptions } = options ?? {};
      const hookRequest = createRequest<TData, TError, TVariables>(
        client,
        config,
        {
          onSuccess,
          onError,
        },
      );

      return useQuery<TData, TError>({
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
          }

          return hookRequest({ ...requestVariables, signal: context.signal });
        },
      });
    };

    use.execute = request;

    return use;
  };
}
