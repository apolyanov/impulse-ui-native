# @impulse-ui-native/endpoint: capability guide

Connect a transport-independent HttpClient to TanStack Query.

## Setup

- HttpClient implementation and TanStack Query QueryClientProvider; install @tanstack/react-query and the chosen transport when needed.

## Capabilities

- Query, infinite-query and mutation factories; imperative execute functions.
- A shared endpoint factory binds a client.
- Query keys preserve endpoint prefixes and include request variables except abort signals; infinite queries merge page parameters into query parameters unless variablesFn supplies a custom mapping.
- Query, infinite-query, and mutation hooks share async-capable onSuccess/onError options; endpoint callbacks run before hook callbacks per request attempt.
- An abstract HttpClient provides transport-independent request/response types, encoded path parameters, and helpers for all ten HTTP methods.

## Boundaries and composition

- Use typed factory definitions rather than inventing URL/data props on visual components.
- The application owns authentication, query keys, request types and error UX.
- Standard query and mutation functions expose .execute; infinite-query factories return hooks only, without an imperative execute API.
- Hook callbacks run for request attempts, not cached reads; deduplicated fetches use one query function's callbacks. Infinite-query success callbacks receive the fetched page. Imperative execute runs only endpoint callbacks.
- Endpoint factories accept HttpClient and unwrap response data. Override protected params/pathParams methods to customize URL serialization; send receives the completed URL without raw parameter objects. Transports own body encoding, decoding, errors, cancellation, and CONNECT tunnels.

Exact contracts: [API reference](../api/endpoint.md). Machine facts: [package JSON](endpoint.json) or [full catalog](../capabilities.json).

## Recipes

- [data-service](../recipes.md#data-service)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                    | Range     | Optional |
| ----------------------- | --------- | -------- |
| `react`                 | `>=18`    | No       |
| `react-native`          | `>=0.73`  | No       |
| `@tanstack/react-query` | `>=5.0.0` | No       |

This package has no directly owned visual components in its public root; use its exports below. Toolkit re-exports the owning packages.

## Public exports

- `BaseVariables` (type)
- `CommonEndpointRequestProps` (type)
- `createEndpointFactory` (value)
  - `(client: HttpClient): { createMutation: <TData, TError = unknown, TVariables extends import("@impulse-ui-native/toolkit").BaseVariables = import("@impulse-ui-native/toolkit").BaseVariables<any>>(config: import("@impulse-ui-native/toolkit").EndpointRequest<TData, TError>) => import("@impulse-ui-native/toolkit").MutationFunction<TData, TError, TVariables>; createQuery: <TData, TError = unknown, TVariables extends import("@impulse-ui-native/toolkit").BaseVariables = import("@impulse-ui-native/toolkit").BaseVariables<any>>(config: import("@impulse-ui-native/toolkit").QueryEndpointRequest<TData, TError, TVariables>) => import("@impulse-ui-native/toolkit").QueryFunction<TData, TError, TVariables>; createInfiniteQuery: <TPage, TError = unknown, TVariables extends import("@impulse-ui-native/toolkit").BaseVariables = import("@impulse-ui-native/toolkit").BaseVariables<any>, TPageParam extends import("@impulse-ui-native/toolkit").PaginationParams = import("@impulse-ui-native/toolkit").PaginationParams, TQueryKey extends import("@tanstack/query-core").QueryKey = readonly unknown[]>(config: import("@impulse-ui-native/toolkit").InfiniteQueryEndpointRequest<TPage, TError, TVariables, TPageParam, TQueryKey>) => (variables: TVariables, options: import("@impulse-ui-native/toolkit").EndpointInfiniteQueryOptions<TPage, TError, TQueryKey, TPageParam>) => import("@tanstack/react-query").UseInfiniteQueryResult<import("@tanstack/query-core").InfiniteData<TPage, unknown>, TError>; }`
- `createInfiniteQueryFactory` (value)
  - `(client: HttpClient): <TPage, TError = unknown, TVariables extends BaseVariables = BaseVariables, TPageParam extends PaginationParams = PaginationParams, TQueryKey extends QueryKey = QueryKey>(config: InfiniteQueryEndpointRequest<TPage, TError, TVariables, TPageParam, TQueryKey>) => (variables: TVariables, options: EndpointInfiniteQueryOptions<TPage, TError, TQueryKey, TPageParam>) => import("@tanstack/react-query").UseInfiniteQueryResult<InfiniteData<TPage, unknown>, TError>`
- `createMutationFactory` (value)
  - `(client: HttpClient): <TData, TError = unknown, TVariables extends BaseVariables = BaseVariables>(config: EndpointRequest<TData, TError>) => MutationFunction<TData, TError, TVariables>`
- `createQueryFactory` (value)
  - `(client: HttpClient): <TData, TError = unknown, TVariables extends BaseVariables = BaseVariables>(config: QueryEndpointRequest<TData, TError, TVariables>) => QueryFunction<TData, TError, TVariables>`
- `createRequest` (value)
  - `<TData, TError, TVariables extends BaseVariables>(client: HttpClient, config: EndpointRequest<TData, TError>, callbacks?: EndpointCallbacks<TData, TError>): (variables: TVariables) => Promise<TData>`
- `EndpointCallbacks` (type)
- `EndpointInfiniteQueryOptions` (type)
- `EndpointMutationOptions` (type)
- `EndpointQueryKey` (type)
- `EndpointQueryOptions` (type)
- `EndpointRequest` (type)
- `HttpBodyMethod` (type)
- `HttpBodyRequestOptions` (type)
- `HttpClient` (class)
- `HttpMethod` (type)
- `HttpPathParams` (type)
- `HttpRequest` (type)
- `HttpRequestOptions` (type)
- `HttpResponse` (type)
- `InfiniteQueryEndpointRequest` (type)
- `MutationFunction` (type)
- `PaginationParams` (type)
- `QueryEndpointRequest` (type)
- `QueryFunction` (type)
- `QueryParams` (type)

### HttpClient methods

- `request`
  - `<Data = unknown, Body = unknown>(request: HttpRequest<Body>): Promise<HttpResponse<Data>>`
- `get`
  - `<Data = unknown>(url: string, options?: HttpRequestOptions): Promise<HttpResponse<Data>>`
- `query`
  - `<Data = unknown, Body = unknown>(url: string, options?: HttpBodyRequestOptions<Body> \| undefined): Promise<HttpResponse<Data>>`
- `head`
  - `(url: string, options?: HttpRequestOptions): Promise<HttpResponse<void>>`
- `post`
  - `<Data = unknown, Body = unknown>(url: string, options?: HttpBodyRequestOptions<Body> \| undefined): Promise<HttpResponse<Data>>`
- `put`
  - `<Data = unknown, Body = unknown>(url: string, options?: HttpBodyRequestOptions<Body> \| undefined): Promise<HttpResponse<Data>>`
- `delete`
  - `<Data = unknown, Body = unknown>(url: string, options?: HttpBodyRequestOptions<Body> \| undefined): Promise<HttpResponse<Data>>`
- `connect`
  - `(url: string, options?: HttpRequestOptions): Promise<HttpResponse<void>>`
- `options`
  - `<Data = unknown>(url: string, options?: HttpRequestOptions): Promise<HttpResponse<Data>>`
- `trace`
  - `<Data = unknown>(url: string, options?: HttpRequestOptions): Promise<HttpResponse<Data>>`
- `patch`
  - `<Data = unknown, Body = unknown>(url: string, options?: HttpBodyRequestOptions<Body> \| undefined): Promise<HttpResponse<Data>>`
