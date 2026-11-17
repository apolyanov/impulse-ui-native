# @impulse-ui-native/endpoint

Local package version: 17.5.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/endpoint

Typed factories that connect an HttpClient to TanStack Query hooks and imperative requests.

## Installation

```sh
pnpm add @impulse-ui-native/endpoint @tanstack/react-query
```

The consuming application must configure TanStack Query's `QueryClientProvider`
and supply a concrete `HttpClient` implementation for its chosen transport.

## Main exports

- `createEndpointFactory` binds one HttpClient and returns all three factories below.
- `createQueryFactory` creates query hooks with an attached `execute` request function.
- `createInfiniteQueryFactory` creates infinite-query hooks with pagination variables.
- `createMutationFactory` creates mutation hooks with an attached `execute` request function.
- `createRequest` builds the shared request function, defaults to GET, and unwraps response data.
- `ParamsSerializer` is an optional query-parameter serializer for transport implementations.
- `HttpClient` is a transport-independent abstract client with helpers for GET, QUERY, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, and PATCH.
- Public types cover variables, pagination, request configuration, query functions, and mutation functions.

## Usage

```tsx
import type { HttpClient } from "@impulse-ui-native/endpoint";
import { createEndpointFactory } from "@impulse-ui-native/endpoint";

declare const client: HttpClient;

const endpoint = createEndpointFactory(client);

const useProject = endpoint.createQuery<Project>({
  key: ["project"],
  path: "/projects/:id",
});

function ProjectScreen({ id }: { id: string }) {
  const project = useProject({ pathParams: { id } });
  // Render project.data, project.error, and project.isPending.
}
```

Generated standard-query and mutation functions are callable as React hooks and also expose `.execute(...)` for imperative use outside React. Infinite-query factories return hooks only; use the HttpClient directly when an imperative paginated request is needed.

Factories return decoded `HttpResponse.data`, so hook data and `.execute()` results
remain payloads. Variables accept `pathParams`, query `params`, `headers`, and
`signal`; mutations also forward `data`. Request headers override matching
endpoint headers. Query and infinite-query hooks forward TanStack Query's abort
signal; imperative calls and mutations use the variable's signal. Mutation
methods remain lowercase (`post`, `put`, `patch`, `delete`), defaulting to `post`.
Error types default to `unknown`; specify your transport's error type explicitly
when needed. The application owns endpoint key prefixes; request variables are
automatically included in query keys so resource IDs and filters remain isolated.

All factories share `createRequest`, including endpoint `onSuccess` and `onError`
callbacks. Async callbacks are awaited before the request settles. GET requests
omit the body; configured mutation methods forward variable `data`.

## Query keys and pagination

Standard and infinite-query keys use this structure:
`[...config.key, ...options.queryKey, variablesWithoutSignal]`. Hook-level
`queryKey` entries are optional additions for both query types. Path parameters,
query parameters, headers, data, and custom variables contribute to cache identity;
abort signals do not. Keep variables serializable and include any external state
used by `variablesFn` in variables or the additional key.

A configured `key: ["projects"]` remains a normal prefix, so
`queryClient.invalidateQueries({ queryKey: ["projects"] })` reaches all resource
and filter variations. `variablesFn` receives the composed key through its query
context; the configured prefix retains its original position.

Without `variablesFn`, infinite queries merge each object `pageParam` into
`variables.params`. Page values override matching base parameters while other
filters remain unchanged. For example, `initialPageParam: { offset: 0 }` with
`variables.params: { limit: 10 }` sends `{ limit: 10, offset: 0 }`; a next-page
parameter of `{ offset: 10 }` sends `{ limit: 10, offset: 10 }`.
When supplied, `variablesFn` owns the complete mapping instead, including custom
cursor or body-based pagination.

## Shared hook callbacks

All hook factories accept the same `EndpointCallbacks<Data, Error>` contract in
their options. These callbacks receive the decoded payload or request error,
including when callbacks are async.

```tsx
const project = useProject(
  { pathParams: { id } },
  {
    onSuccess: (data) => console.log("Loaded", data),
    onError: (error) => console.log("Failed", error),
  },
);

const saveProject = useSaveProject({
  onSuccess: (data) => console.log("Saved", data),
  onError: (error) => console.log("Failed", error),
});
```

Endpoint callbacks run first, followed by hook callbacks; both are awaited in
the shared request flow. `.execute()` runs only endpoint callbacks. Hook
callbacks are removed from the options passed to TanStack Query, so mutation
hooks use the same request-level callback handling as query hooks.

Callbacks run per request attempt, including refetches and retries; an error
callback can therefore run before retries are exhausted. Cached reads do not
trigger callbacks. Deduplicated queries use the callbacks from the query
function performing that fetch, rather than notifying every mounted consumer.
Infinite-query success callbacks receive the fetched page, not the accumulated
`InfiniteData`. Throwing callbacks reject the request and stop that callback
sequence; success callback errors enter the shared error flow.

## Abstract HTTP client

Extend `HttpClient` and implement its protected generic `send<Data, Body>` method to
connect your transport. The request contains `method`, `url`, optional `headers`,
query `params`, an abort `signal`, and optional `data` for body-capable methods.
The base `request` method resolves `pathParams` before calling `send`.
Return `Promise<HttpResponse<Data>>` with decoded `data`, numeric `status`, and
response `headers`. Implementations own URL/query serialization, body encoding,
response decoding, HTTP error handling, and cancellation.

```ts
import type { HttpClient } from "@impulse-ui-native/endpoint";

declare const client: HttpClient;

const project = await client.get<Project>("/projects/123");
const matches = await client.query<Project[]>("/projects", {
  data: { name: "Impulse" },
});
const metadata = await client.head("/projects/123");
const detail = await client.get<Project>("/projects/:id", {
  pathParams: { id: 123 },
  params: { include: "owner" },
});
// GET /projects/123?include=owner
// project.data and matches.data contain decoded responses.
// metadata.data is void; headers and status are available.
```

`GET`, `HEAD`, `CONNECT`, `OPTIONS`, and `TRACE` helpers do not accept request
data. `QUERY`, `POST`, `PUT`, `PATCH`, and `DELETE` accept optional data. The
low-level request type enforces the same policy. `HEAD` and `CONNECT` helpers
return `HttpResponse<void>`. CONNECT tunnel management belongs to the concrete
transport; this response contract exposes only handshake status and headers.
Transports must reject unsupported methods rather than silently substitute one.

Path placeholders are named `:name` (letters, digits, and
underscores, starting with a letter or underscore). Values are strings or numbers
and are encoded as individual URL segments. Missing values reject the request
before it reaches the transport. Repeated placeholders are supported; unused
values are ignored. Replacement scans the supplied template directly; pass query
parameters through `params`.
`pathParams` is removed from the request passed to `send`. Direct `request` calls
and every verb helper use this same resolution.

All endpoint factories accept this abstraction. To migrate from Axios, wrap it
in an HttpClient subclass implementing `send`; raw Axios clients are no longer
accepted. Axios is no longer a required peer. No concrete adapter is included.

## Agent and design reference

Start with the [capability guide](../capabilities/endpoint.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/endpoint/src/factories/create-endpoint.factory.ts

```tsx
import type { HttpClient } from "../http";
import { createMutationFactory } from "../mutation";
import { createInfiniteQueryFactory, createQueryFactory } from "../query";

export function createEndpointFactory(client: HttpClient) {
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

### packages/endpoint/src/http/http-client.ts

```tsx
import type {
  HttpBodyRequestOptions,
  HttpRequest,
  HttpRequestOptions,
  HttpResponse,
} from "../types/http.types";

/** Transport implementations own serialization, decoding, errors, and cancellation. */
export abstract class HttpClient {
  protected abstract send<Data = unknown, Body = unknown>(
    request: HttpRequest<Body>,
  ): Promise<HttpResponse<Data>>;

  async request<Data = unknown, Body = unknown>(
    request: HttpRequest<Body>,
  ): Promise<HttpResponse<Data>> {
    const { pathParams, ...transportRequest } = request;
    const url = request.url.replace(
      /:([A-Za-z_][A-Za-z0-9_]*)/g,
      (_, key: string): string => {
        const value = pathParams?.[key];

        if (value === undefined) {
          throw new Error(`Missing path parameter: ${key}`);
        }

        return encodeURIComponent(String(value));
      },
    );

    return this.send<Data, Body>({ ...transportRequest, url });
  }

  get<Data = unknown>(url: string, options?: HttpRequestOptions) {
    return this.request<Data>({ ...options, method: "GET", url });
  }

  query<Data = unknown, Body = unknown>(
    url: string,
    options?: HttpBodyRequestOptions<Body>,
  ) {
    return this.request<Data, Body>({ ...options, method: "QUERY", url });
  }

  head(url: string, options?: HttpRequestOptions) {
    return this.request<void>({ ...options, method: "HEAD", url });
  }

  post<Data = unknown, Body = unknown>(
    url: string,
    options?: HttpBodyRequestOptions<Body>,
  ) {
    return this.request<Data, Body>({ ...options, method: "POST", url });
  }

  put<Data = unknown, Body = unknown>(
    url: string,
    options?: HttpBodyRequestOptions<Body>,
  ) {
    return this.request<Data, Body>({ ...options, method: "PUT", url });
  }

  delete<Data = unknown, Body = unknown>(
    url: string,
    options?: HttpBodyRequestOptions<Body>,
  ) {
    return this.request<Data, Body>({ ...options, method: "DELETE", url });
  }

  connect(url: string, options?: HttpRequestOptions) {
    return this.request<void>({ ...options, method: "CONNECT", url });
  }

  options<Data = unknown>(url: string, options?: HttpRequestOptions) {
    return this.request<Data>({ ...options, method: "OPTIONS", url });
  }

  trace<Data = unknown>(url: string, options?: HttpRequestOptions) {
    return this.request<Data>({ ...options, method: "TRACE", url });
  }

  patch<Data = unknown, Body = unknown>(
    url: string,
    options?: HttpBodyRequestOptions<Body>,
  ) {
    return this.request<Data, Body>({ ...options, method: "PATCH", url });
  }
}
```

### packages/endpoint/src/http/index.ts

```tsx
export { HttpClient } from "./http-client";
```

### packages/endpoint/src/index.ts

```tsx
export * from "./factories";
export * from "./mutation";
export * from "./query";
export * from "./types";
export * from "./utils";
export * from "./http";
```

### packages/endpoint/src/mutation/create-mutation.ts

```tsx
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
```

### packages/endpoint/src/query/create-query.ts

```tsx
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
```

### packages/endpoint/src/query/index.ts

```tsx
export { createQueryFactory } from "./create-query";
export { createInfiniteQueryFactory } from "./create-infinite-query";
```

### packages/endpoint/src/types/callback.types.ts

```tsx
export interface EndpointCallbacks<TData, TError> {
  onSuccess?: (data: TData) => Promise<void> | void;
  onError?: (error: TError) => Promise<void> | void;
}
```

### packages/endpoint/src/types/http.types.ts

```tsx
import type { QueryParams } from "./request.types";

export type HttpMethod =
  | "GET"
  | "QUERY"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";

export type HttpBodyMethod = "QUERY" | "POST" | "PUT" | "DELETE" | "PATCH";

export type HttpPathParams = Readonly<Record<string, string | number>>;

export interface HttpRequestOptions {
  headers?: Readonly<Record<string, string>>;
  params?: QueryParams;
  pathParams?: HttpPathParams;
  signal?: AbortSignal;
}

export interface HttpBodyRequestOptions<
  Body = unknown,
> extends HttpRequestOptions {
  data?: Body;
}

export type HttpRequest<Body = unknown> = HttpRequestOptions & {
  url: string;
} & (
    | { method: HttpBodyMethod; data?: Body }
    | { method: Exclude<HttpMethod, HttpBodyMethod>; data?: never }
  );

export interface HttpResponse<Data = unknown> {
  data: Data;
  status: number;
  headers: Readonly<Record<string, string>>;
}
```

### packages/endpoint/src/types/index.ts

```tsx
export * from "./query.types";
export * from "./request.types";
export * from "./mutation.types";
export * from "./http.types";
export * from "./callback.types";
```

### packages/endpoint/src/types/mutation.types.ts

```tsx
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
```

### packages/endpoint/src/types/query.types.ts

```tsx
import type {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import type { EndpointCallbacks } from "./callback.types";

export type EndpointQueryKey<TQueryKey extends QueryKey = QueryKey> = readonly [
  ...TQueryKey,
  ...unknown[],
];

export type EndpointQueryOptions<TData, TError> = Omit<
  UseQueryOptions<TData, TError>,
  "queryFn" | "queryKey"
> & { queryKey?: QueryKey } & EndpointCallbacks<TData, TError>;

export type EndpointInfiniteQueryOptions<
  TPage,
  TError,
  TQueryKey extends QueryKey,
  TPageParam,
> = Omit<
  UseInfiniteQueryOptions<
    TPage,
    TError,
    InfiniteData<TPage>,
    EndpointQueryKey<TQueryKey>,
    TPageParam
  >,
  "queryFn" | "queryKey"
> & { queryKey?: QueryKey } & EndpointCallbacks<TPage, TError>;

export interface QueryFunction<TData, TError, TVariables> {
  (
    variables: TVariables,
    options?: EndpointQueryOptions<TData, TError>,
  ): UseQueryResult<TData, TError>;
  execute: (args: TVariables) => Promise<TData>;
}
```

### packages/endpoint/src/types/request.types.ts

```tsx
import type { QueryFunctionContext, QueryKey } from "@tanstack/react-query";

import type { EndpointCallbacks } from "./callback.types";
import type { HttpRequestOptions } from "./http.types";
import type { EndpointQueryKey } from "./query.types";

export interface BaseVariables<Data = any> extends HttpRequestOptions {
  data?: Data;
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
> extends EndpointCallbacks<TData, TError> {
  path: string;
  key: TQueryKey;
  headers?: Readonly<Record<string, string>>;
}

export interface QueryEndpointRequest<
  TData,
  TError,
  TVariables,
  TQueryKey extends QueryKey = QueryKey,
> extends CommonEndpointRequestProps<TData, TError, TQueryKey> {
  variablesFn?: (
    context: QueryFunctionContext<EndpointQueryKey<TQueryKey>>,
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
    context: QueryFunctionContext<EndpointQueryKey<TQueryKey>, TPageParam>,
    variables: TVariables,
  ) => TVariables;
}

export interface EndpointRequest<
  TData,
  TError,
> extends CommonEndpointRequestProps<TData, TError> {
  method?: "post" | "patch" | "put" | "delete";
}
```

### packages/endpoint/src/utils/index.ts

```tsx
export * from "./params.utils";
export * from "./request.utils";
```

### packages/endpoint/src/utils/params.utils.ts

```tsx
import type { QueryParams } from "../types";

export const ParamsSerializer = {
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
```
