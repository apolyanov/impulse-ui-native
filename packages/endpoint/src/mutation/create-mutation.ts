import { useMutation } from "@tanstack/react-query";

import type { HttpClient } from "../http";
import {
  BaseVariables,
  EndpointMutationOptions,
  EndpointRequest,
  MutationFunction,
} from "../types";
import { createRequest } from "../utils";

export function createMutationFactory(client: HttpClient) {
  return function createMutation<
    TData,
    TError = unknown,
    TVariables extends BaseVariables = BaseVariables,
  >(
    config: EndpointRequest<TData, TError>,
  ): MutationFunction<TData, TError, TVariables> {
    const requestConfig: EndpointRequest<TData, TError> = {
      ...config,
      method: config.method ?? "post",
    };
    const request = createRequest<TData, TError, TVariables>(
      client,
      requestConfig,
    );

    const use: MutationFunction<TData, TError, TVariables> = function (
      options?: EndpointMutationOptions<TData, TError, TVariables>,
    ) {
      const { onSuccess, onError, ...mutationOptions } = options ?? {};
      const hookRequest = createRequest<TData, TError, TVariables>(
        client,
        requestConfig,
        {
          onSuccess,
          onError,
        },
      );

      return useMutation<TData, TError, TVariables>({
        ...mutationOptions,
        mutationKey: config.key,
        mutationFn: hookRequest,
      });
    };

    use.execute = request;

    return use;
  };
}
