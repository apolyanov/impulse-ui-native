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

Start with the [capability guide](../../docs/design-system/capabilities/endpoint.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../../docs/design-system/component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.
