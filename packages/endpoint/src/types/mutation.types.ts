import type {
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";

import type { EndpointCallbacks } from "./callback.types";
import { BaseVariables } from "./request.types";

export type EndpointMutationOptions<TData, TError, TVariables> = Omit<
  UseMutationOptions<TData, TError, TVariables>,
  "mutationFn" | "mutationKey" | "onSuccess" | "onError"
> &
  EndpointCallbacks<TData, TError>;

export interface MutationFunction<
  TData,
  TError,
  TVariables extends BaseVariables,
> {
  (
    options?: EndpointMutationOptions<TData, TError, TVariables>,
  ): UseMutationResult<TData, TError, TVariables>;
  execute: (args: TVariables) => Promise<TData>;
}
