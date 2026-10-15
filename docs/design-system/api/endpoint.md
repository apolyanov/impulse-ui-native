# @impulse-ui-native/endpoint

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/endpoint

Typed factories that connect an Axios client to TanStack Query hooks and imperative requests.

## Installation

```sh
pnpm add @impulse-ui-native/endpoint axios @tanstack/react-query
```

The consuming application must configure TanStack Query's `QueryClientProvider`.

## Main exports

- `createEndpointFactory` binds one Axios client and returns all three factories below.
- `createQueryFactory` creates query hooks with an attached `execute` request function.
- `createInfiniteQueryFactory` creates infinite-query hooks with pagination variables.
- `createMutationFactory` creates mutation hooks with an attached `execute` request function.
- `createRequest` builds the underlying Axios request function.
- `ParamsSerializer` provides the shared query-parameter serialization policy.
- Public types cover variables, pagination, request configuration, query functions, and mutation functions.

## Usage

```tsx
import type { Axios } from "axios";

import { createEndpointFactory } from "@impulse-ui-native/endpoint";

declare const client: Axios;

const endpoint = createEndpointFactory(client);

const useProject = endpoint.createQuery<Project>({
  key: ["project"],
  path: "/projects/detail",
});

function ProjectScreen({ id }: { id: string }) {
  const project = useProject({ params: { id } });
  // Render project.data, project.error, and project.isPending.
}
```

Generated standard-query and mutation functions are callable as React hooks and also expose `.execute(...)` for imperative use outside React. Infinite-query factories return hooks only; use the configured Axios client directly when an imperative paginated request is needed.


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/endpoint/src/factories/create-endpoint.factory.ts

```tsx
import type { Axios } from "axios";

import { createMutationFactory } from "../mutation";
import { createInfiniteQueryFactory, createQueryFactory } from "../query";

export function createEndpointFactory(client: Axios) {
  return {
    createMutation: createMutationFactory(client),
    createQuery: createQueryFactory(client),
    createInfiniteQuery: createInfiniteQueryFactory(client),
  };
}
```

### packages/endpoint/src/factories/index.ts

```tsx
export { createEndpointFactory } from "./create-endpoint.factory";
```

### packages/endpoint/src/index.ts

```tsx
export * from "./factories";
export * from "./mutation";
export * from "./query";
export * from "./types";
export * from "./utils";
```

### packages/endpoint/src/mutation/create-mutation.ts

```tsx
import { useMutation } from "@tanstack/react-query";
import { type Axios, type AxiosError } from "axios";

import { BaseVariables, EndpointRequest, MutationFunction } from "../types";
import { ParamsSerializer } from "../utils";

export function createMutationFactory(client: Axios) {
  return function createQuery<
    TData,
    TError = AxiosError,
    TVariables extends BaseVariables = BaseVariables,
  >(
    config: EndpointRequest<TData, TError>,
  ): MutationFunction<TData, TError, TVariables> {
    const request = async (variables: TVariables) =>
      client.request<TData, TData>({
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
```

### packages/endpoint/src/mutation/index.ts

```tsx
export { createMutationFactory } from "./create-mutation";
```

### packages/endpoint/src/query/create-infinite-query.ts

```tsx
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
```

### packages/endpoint/src/query/create-query.ts

```tsx
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
```

### packages/endpoint/src/query/index.ts

```tsx
export { createQueryFactory } from "./create-query";
export { createInfiniteQueryFactory } from "./create-infinite-query";
```

### packages/endpoint/src/types/index.ts

```tsx
export * from "./query.types";
export * from "./request.types";
export * from "./mutation.types";
```

### packages/endpoint/src/types/mutation.types.ts

```tsx
import { UseMutationResult } from "@tanstack/react-query";

import { BaseVariables } from "./request.types";

export interface MutationFunction<
  TData,
  TError,
  TVariables extends BaseVariables,
> {
  (): UseMutationResult<TData, TError, TVariables>;
  execute: (args: TVariables) => Promise<TData>;
}
```

### packages/endpoint/src/types/query.types.ts

```tsx
import { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";

export interface QueryFunction<TData, TError, TVariables> {
  (
    variables: TVariables,
    options?: UseQueryOptions<TData, TError>,
  ): UseQueryResult<TData, TError>;
  execute: (args: TVariables) => Promise<TData>;
}
```

### packages/endpoint/src/types/request.types.ts

```tsx
import type {
  Query,
  QueryFunctionContext,
  QueryKey,
} from "@tanstack/react-query";

export interface BaseVariables<Data = any> {
  data?: Data;
  params?: QueryParams;
}

type Primitive = string | number | boolean;

export interface PaginationParams {
  limit?: number;
  offset?: number;
  direction?: "forward" | "backward";
}

export type QueryParams = PaginationParams & {
  [key: string]: Primitive | Primitive[] | null | undefined;
};

export interface CommonEndpointRequestProps<
  TData,
  TError,
  TQueryKey extends QueryKey = QueryKey,
> {
  path: string;
  key: TQueryKey;
  onSuccess?: (data: TData) => Promise<void> | void;
  onError?: (error: TError) => Promise<void> | void;
}

export interface QueryEndpointRequest<
  TData,
  TError,
  TVariables,
  TQueryKey extends QueryKey = QueryKey,
> extends CommonEndpointRequestProps<TData, TError> {
  variablesFn?: (
    context: QueryFunctionContext<TQueryKey>,
    variables: TVariables,
  ) => TVariables;
}

export interface InfiniteQueryEndpointRequest<
  TData,
  TError,
  TVariables,
  TPageParam extends PaginationParams,
  TQueryKey extends QueryKey = QueryKey,
> extends CommonEndpointRequestProps<TData, TError, TQueryKey> {
  variablesFn?: (
    context: QueryFunctionContext<TQueryKey, TPageParam>,
    variables: TVariables,
  ) => TVariables;
}

export interface EndpointRequest<
  TData,
  TError,
> extends CommonEndpointRequestProps<TData, TError> {
  method?: "post" | "patch" | "put" | "delete";
  headers?: Record<string, string>;
}
```

### packages/endpoint/src/utils/index.ts

```tsx
export * from "./params.utils";
export * from "./request.utils";
```

### packages/endpoint/src/utils/params.utils.ts

```tsx
import type { AxiosRequestConfig } from "axios";

import type { QueryParams } from "../types";

export const ParamsSerializer: AxiosRequestConfig["paramsSerializer"] = {
  serialize: (params: QueryParams) => {
    const searchParams = new URLSearchParams();

    for (const key in params) {
      const value = params[key];

      if (value === null || value === undefined) {
        continue;
      }

      if (Array.isArray(value) && value.length > 0) {
        searchParams.set(key, value.map(String).join(","));
      } else {
        searchParams.set(key, String(value));
      }
    }

    return searchParams.toString();
  },
};
```

### packages/endpoint/src/utils/request.utils.ts

```tsx
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
```
