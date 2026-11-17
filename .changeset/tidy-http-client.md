---
"@impulse-ui-native/endpoint": major
---

Add a transport-independent abstract HttpClient with typed requests, responses, encoded path parameters, and helpers for all ten HTTP methods. Concrete transports implement send; the base request method resolves path placeholders and validates missing values.

Endpoint factories and createRequest now require HttpClient instead of Axios and return decoded response data. Wrap existing Axios clients in an HttpClient subclass. Variables forward path parameters, headers, and abort signals; query hooks forward TanStack Query cancellation. Error types default to unknown, mutation methods default to post, and Axios is no longer a required peer dependency.

Share createRequest across all factories, including mutation endpoint callbacks. Await async success and error callbacks before settling requests.

Add a shared EndpointCallbacks contract to standard-query, infinite-query, and mutation hook options. Await endpoint callbacks before hook callbacks per request attempt; imperative execute calls run only endpoint callbacks, and infinite-query success callbacks receive each fetched page.

Include request variables (excluding abort signals) in standard and infinite-query cache keys, preserve configured key prefixes for invalidation, and support optional additional hook keys for both query types. Merge infinite-query page parameters into query parameters by default; custom variablesFn mappings remain authoritative. Query function contexts expose the composed cache key.
