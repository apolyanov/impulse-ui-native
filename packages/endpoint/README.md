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

Each generated query or mutation is callable as a React hook and also exposes `.execute(...)` for imperative use outside React.
