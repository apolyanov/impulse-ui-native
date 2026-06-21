import { Axios } from "axios";

import { BaseVariables, CommonEndpointRequestProps } from "../types";
import { ParamsSerializer } from "./params.utils";

export function createRequest<TData, TError, TVariables extends BaseVariables>(
  client: Axios,
  config: CommonEndpointRequestProps<TData, TError>,
) {
  return async function (variables: TVariables) {
    try {
      const response = await client.get<TData, TData, TError>(config.path, {
        params: variables.params,
        paramsSerializer: ParamsSerializer,
      });
      config.onSuccess?.(response);
      return response;
    } catch (error) {
      config.onError?.(error as TError);

      throw error;
    }
  };
}
