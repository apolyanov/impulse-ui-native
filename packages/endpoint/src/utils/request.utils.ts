import type { HttpClient } from "../http";
import type { EndpointCallbacks, HttpResponse } from "../types";
import { BaseVariables, EndpointRequest } from "../types";

export function createRequest<TData, TError, TVariables extends BaseVariables>(
  client: HttpClient,
  config: EndpointRequest<TData, TError>,
  callbacks?: EndpointCallbacks<TData, TError>,
) {
  return async function (variables: TVariables): Promise<TData> {
    try {
      const method = config.method ?? "get";
      const options = {
        params: variables.params,
        pathParams: variables.pathParams,
        headers: { ...config.headers, ...variables.headers },
        signal: variables.signal,
      };
      let response: HttpResponse<TData>;

      if (method === "get") {
        response = await client.get<TData>(config.path, options);
      } else {
        response = await client[method]<TData>(config.path, {
          ...options,
          data: variables.data,
        });
      }

      await config.onSuccess?.(response.data);
      await callbacks?.onSuccess?.(response.data);

      return response.data;
    } catch (error) {
      await config.onError?.(error as TError);
      await callbacks?.onError?.(error as TError);

      throw error;
    }
  };
}
