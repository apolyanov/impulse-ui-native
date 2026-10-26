# @impulse-ui-native/endpoint: capability guide

Connect an Axios API client to TanStack Query.

## Setup

- Axios client and TanStack Query QueryClientProvider; install axios and @tanstack/react-query.

## Capabilities

- Query, infinite-query and mutation factories; imperative execute functions.
- A shared endpoint factory binds a client.

## Boundaries and composition

- Use typed factory definitions rather than inventing URL/data props on visual components.
- The application owns authentication, query keys, request types and error UX.
- Standard query and mutation functions expose .execute; infinite-query factories return hooks only, without an imperative execute API.

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
| `axios`                 | `>=1.6.0` | No       |

This package has no directly owned visual components in its public root; use its exports below. Toolkit re-exports the owning packages.

## Public exports

- `BaseVariables` (type)
- `CommonEndpointRequestProps` (type)
- `createEndpointFactory` (value)
  - `(client: Axios): { createMutation: <TData, TError = import("axios").AxiosError<unknown, any>, TVariables extends import("@impulse-ui-native/toolkit").BaseVariables = import("@impulse-ui-native/toolkit").BaseVariables<any>>(config: import("@impulse-ui-native/toolkit").EndpointRequest<TData, TError>) => import("@impulse-ui-native/toolkit").MutationFunction<TData, TError, TVariables>; createQuery: <TData, TError = import("axios").AxiosError<unknown, any>, TVariables extends import("@impulse-ui-native/toolkit").BaseVariables = import("@impulse-ui-native/toolkit").BaseVariables<any>>(config: import("@impulse-ui-native/toolkit").QueryEndpointRequest<TData, TError, TVariables>) => import("@impulse-ui-native/toolkit").QueryFunction<TData, TError, TVariables>; createInfiniteQuery: <TPage, TError = import("axios").AxiosError<unknown, any>, TVariables extends import("@impulse-ui-native/toolkit").BaseVariables = import("@impulse-ui-native/toolkit").BaseVariables<any>, TPageParam extends import("@impulse-ui-native/toolkit").PaginationParams = import("@impulse-ui-native/toolkit").PaginationParams, TQueryKey extends import("@tanstack/query-core").QueryKey = readonly unknown[]>(config: import("@impulse-ui-native/toolkit").InfiniteQueryEndpointRequest<TPage, TError, TVariables, TPageParam, TQueryKey>) => (variables: TVariables, options: Omit<import("@tanstack/react-query").UseInfiniteQueryOptions<TPage, TError, import("@tanstack/query-core").InfiniteData<TPage>, TQueryKey, TPageParam>, "queryKey">) => import("@tanstack/react-query").UseInfiniteQueryResult<import("@tanstack/query-core").InfiniteData<TPage, unknown>, TError>; }`
- `createInfiniteQueryFactory` (value)
  - `(client: Axios): <TPage, TError = AxiosError, TVariables extends BaseVariables = BaseVariables, TPageParam extends PaginationParams = PaginationParams, TQueryKey extends QueryKey = QueryKey>(config: InfiniteQueryEndpointRequest<TPage, TError, TVariables, TPageParam, TQueryKey>) => (variables: TVariables, options: Omit<UseInfiniteQueryOptions<TPage, TError, InfiniteData<TPage>, TQueryKey, TPageParam>, "queryKey">) => import("@tanstack/react-query").UseInfiniteQueryResult<InfiniteData<TPage, unknown>, TError>`
- `createMutationFactory` (value)
  - `(client: Axios): <TData, TError = AxiosError, TVariables extends BaseVariables = BaseVariables>(config: EndpointRequest<TData, TError>) => MutationFunction<TData, TError, TVariables>`
- `createQueryFactory` (value)
  - `(client: Axios): <TData, TError = AxiosError, TVariables extends BaseVariables = BaseVariables>(config: QueryEndpointRequest<TData, TError, TVariables>) => QueryFunction<TData, TError, TVariables>`
- `createRequest` (value)
  - `<TData, TError, TVariables extends BaseVariables>(client: Axios, config: CommonEndpointRequestProps<TData, TError>): (variables: TVariables) => Promise<TData>`
- `EndpointRequest` (type)
- `InfiniteQueryEndpointRequest` (type)
- `MutationFunction` (type)
- `PaginationParams` (type)
- `ParamsSerializer` (value)
- `QueryEndpointRequest` (type)
- `QueryFunction` (type)
- `QueryParams` (type)
