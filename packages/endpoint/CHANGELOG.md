# @impulse-ui-native/endpoint

## 18.0.0

### Major Changes

- 610907d: Add a transport-independent abstract HttpClient with typed requests, responses, encoded path parameters, and helpers for all ten HTTP methods. Concrete transports implement send; the base request method resolves path placeholders and validates missing values.

  Endpoint factories and createRequest now require HttpClient instead of Axios and return decoded response data. Wrap existing Axios clients in an HttpClient subclass. Variables forward path parameters, headers, and abort signals; query hooks forward TanStack Query cancellation. Error types default to unknown, mutation methods default to post, and Axios is no longer a required peer dependency.

  Share createRequest across all factories, including mutation endpoint callbacks. Await async success and error callbacks before settling requests.

  Add a shared EndpointCallbacks contract to standard-query, infinite-query, and mutation hook options. Await endpoint callbacks before hook callbacks per request attempt; imperative execute calls run only endpoint callbacks, and infinite-query success callbacks receive each fetched page.

  Include request variables (excluding abort signals) in standard and infinite-query cache keys, preserve configured key prefixes for invalidation, and support optional additional hook keys for both query types. Merge infinite-query page parameters into query parameters by default; custom variablesFn mappings remain authoritative. Query function contexts expose the composed cache key.

## 17.5.1

### Patch Changes

- Adding useAsyncControllableState hook to help with managing async selects

## 17.5.0

## 17.4.2

## 17.4.1

## 17.4.0

## 17.3.0

## 17.2.0

## 17.1.0

## 17.0.0

## 16.0.0

## 15.0.5

## 15.0.4

## 15.0.3

### Patch Changes

- Adding datepicker tone and variant props

## 15.0.2

## 15.0.1

## 15.0.0

## 14.1.1

## 14.1.0

## 14.0.0

## 13.0.0

## 12.0.0

## 11.4.0

## 11.3.2

## 11.3.1

## 11.3.0

## 11.2.0

## 11.1.0

## 11.0.1

## 11.0.0

## 10.0.0

## 9.1.2

### Patch Changes

- 0f2d6de: Publish compiled React Native entry points while preserving source exports for instant workspace development in Storybook and the playground.

## 9.1.1

## 9.1.0

## 9.0.0

## 8.3.0

## 8.2.0

## 8.1.0

## 8.0.0

## 7.0.1

## 7.0.0

## 6.3.1

## 6.3.0

## 6.2.0

## 6.1.0

## 6.0.0

## 5.0.0

## 4.0.0

## 3.0.0

## 2.9.0

## 2.8.0

## 2.7.0

## 2.6.0

## 2.5.0

### Minor Changes

- Theme tokens cleanup

## 2.4.0

## 2.3.5

### Patch Changes

- Adding missing props in the package.json

## 2.3.4

### Patch Changes

- Adding licenses to packages

## 2.1.6

### Patch Changes

- f169c09: Fixing wrong tag flex prop

## 2.1.5

## 2.1.4

### Patch Changes

- 13ae4f4: Updating README docs

## 2.1.3

## 2.1.2

## 2.1.1

## 2.1.0

## 2.0.1

### Patch Changes

- Updating READMEs

## 2.0.0

### Major Changes

- Initial major public release
