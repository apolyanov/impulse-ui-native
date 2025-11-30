import { useMutation } from "@tanstack/react-query";
import { type Axios, type AxiosError } from "axios";
import type {
  BaseVariables,
  EndpointRequest,
  MutationFunction,
} from "../../types";
import { ParamsSerializer } from "../../utils";

export function createMutationFactory(client: Axios) {
  return function createQuery<
    TData,
    TError = AxiosError,
    TVariables extends BaseVariables = BaseVariables,
  >(
    config: EndpointRequest<TData, TError>
  ): MutationFunction<TData, TError, TVariables> {
    const request = async (variables: TVariables) =>
      client.request<unknown, TData>({
        url: config.path,
        method: config.method,
        data: variables.data,
        params: variables.params,
        paramsSerializer: ParamsSerializer,
      });

    const use: MutationFunction<TData, TError, TVariables> = function () {
      return useMutation<TData, TError, TVariables>({
        mutationKey: config.key,
        mutationFn: request,
      });
    };

    use.execute = request;

    return use;
  };
}
