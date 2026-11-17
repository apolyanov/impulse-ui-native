import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import { runInThisContext } from "node:vm";
import ts from "typescript";

const requireEndpoint = createRequire(
  new URL("../packages/endpoint/package.json", import.meta.url),
);
const { QueryClient, InfiniteQueryObserver } = requireEndpoint(
  "@tanstack/react-query",
);

function load(relativePath, imports = {}) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  });
  const exports = {};
  const execute = runInThisContext(
    `(function(exports, require) { ${outputText}\n })`,
  );
  execute(exports, (name) => {
    assert.ok(Object.hasOwn(imports, name), `Unexpected import: ${name}`);
    return imports[name];
  });
  return exports;
}

const { HttpClient } = load("../packages/endpoint/src/http/http-client.ts");
const { createRequest } = load(
  "../packages/endpoint/src/utils/request.utils.ts",
);
const queryKeyUtils = load("../packages/endpoint/src/utils/query-key.utils.ts");
const queryHooks = {
  useQuery: (options) => options,
  useInfiniteQuery: (options) => options,
  useMutation: (options) => options,
};
const factoryImports = {
  "@tanstack/react-query": queryHooks,
  "../utils": { createRequest },
  "../utils/query-key.utils": queryKeyUtils,
};
const { createQueryFactory } = load(
  "../packages/endpoint/src/query/create-query.ts",
  factoryImports,
);
const { createInfiniteQueryFactory } = load(
  "../packages/endpoint/src/query/create-infinite-query.ts",
  factoryImports,
);
const { createMutationFactory } = load(
  "../packages/endpoint/src/mutation/create-mutation.ts",
  factoryImports,
);
const { createEndpointFactory } = load(
  "../packages/endpoint/src/factories/create-endpoint.factory.ts",
  {
    "../query": { createQueryFactory, createInfiniteQueryFactory },
    "../mutation": { createMutationFactory },
  },
);

class RecordingClient extends HttpClient {
  requests = [];
  response = { data: undefined, status: 200, headers: {} };

  async send(request) {
    this.requests.push(request);
    if (request.signal?.aborted) {
      throw request.signal.reason;
    }
    return this.response;
  }
}

test("all HTTP helpers dispatch their method and retain request metadata", async () => {
  const client = new RecordingClient();
  const controller = new AbortController();
  const options = {
    headers: { Authorization: "Bearer token" },
    params: { limit: 10 },
    signal: controller.signal,
  };
  const methods = [
    "get",
    "query",
    "head",
    "post",
    "put",
    "delete",
    "connect",
    "options",
    "trace",
    "patch",
  ];

  for (const method of methods) {
    const response = await client[method]("/projects", options);
    assert.equal(response, client.response);
    assert.deepEqual(client.requests.at(-1), {
      ...options,
      method: method.toUpperCase(),
      url: "/projects",
    });
  }
  assert.equal(Object.hasOwn(options, "method"), false);
});

test("QUERY forwards query content separately from URL parameters", async () => {
  const client = new RecordingClient();
  const data = { filters: [{ name: "Impulse" }] };
  await client.query("/projects", { data, params: { limit: 5 } });
  assert.equal(client.requests[0].data, data);
  assert.deepEqual(client.requests[0].params, { limit: 5 });
});

test("helpers propagate transport rejection and cancellation", async () => {
  const client = new RecordingClient();
  const controller = new AbortController();
  const reason = new Error("Cancelled");
  controller.abort(reason);
  await assert.rejects(
    client.get("/projects", { signal: controller.signal }),
    (error) => error === reason,
  );
});

test("path values are encoded and query parameters remain separate", async () => {
  const client = new RecordingClient();
  await client.get("/projects/:projectId/items/:id", {
    pathParams: { projectId: 0, id: "a/b ?#%雪" },
    params: { include: "owner" },
  });
  assert.equal(
    client.requests[0].url,
    `/projects/0/items/${encodeURIComponent("a/b ?#%雪")}`,
  );
  assert.deepEqual(client.requests[0].params, { include: "owner" });
  assert.equal(Object.hasOwn(client.requests[0], "pathParams"), false);
});

test("direct requests resolve repeated placeholders without mutating inputs", async () => {
  const client = new RecordingClient();
  const request = {
    method: "POST",
    url: "/:id/copy/:id",
    pathParams: { id: "x/y" },
    data: { name: "copy" },
  };
  await client.request(request);
  assert.equal(client.requests[0].url, "/x%2Fy/copy/x%2Fy");
  assert.equal(client.requests[0].data, request.data);
  assert.equal(request.url, "/:id/copy/:id");
});

test("missing path values reject before reaching the transport", async () => {
  const client = new RecordingClient();
  for (const pathParams of [undefined, {}]) {
    await assert.rejects(
      client.get("/projects/:id", { pathParams }),
      /Missing path parameter: id/,
    );
  }
  assert.equal(client.requests.length, 0);
});

test("placeholders support name prefixes and empty values", async () => {
  const client = new RecordingClient();
  await client.get("/get-info/:name/:id", {
    pathParams: { name: "Alex", id: "" },
  });
  assert.equal(client.requests[0].url, "/get-info/Alex/");
  await client.get("/item-:id", { pathParams: { id: 123 } });
  assert.equal(client.requests[1].url, "/item-123");
});

test("query execute unwraps payloads and forwards path parameters and headers", async () => {
  const client = new RecordingClient();
  const data = { id: 123, name: "Alex" };
  client.response = { data, status: 200, headers: { "x-request-id": "abc" } };
  const successes = [];
  const endpoint = createEndpointFactory(client);
  const useProject = endpoint.createQuery({
    path: "/projects/:id",
    key: ["project", 123],
    headers: { Authorization: "default", Accept: "application/json" },
    onSuccess: (payload) => successes.push(payload),
  });
  const result = await useProject.execute({
    pathParams: { id: 123 },
    params: { include: "owner" },
    headers: { Authorization: "override" },
  });
  assert.equal(result, data);
  assert.equal(successes[0], data);
  assert.equal(client.requests[0].url, "/projects/123");
  assert.deepEqual(client.requests[0].params, { include: "owner" });
  assert.deepEqual(client.requests[0].headers, {
    Authorization: "override",
    Accept: "application/json",
  });
});

test("query hooks forward context cancellation after transforming variables", async () => {
  const client = new RecordingClient();
  const signal = new AbortController().signal;
  const inputSignal = new AbortController().signal;
  const useProject = createQueryFactory(client)({
    path: "/projects/:id",
    key: ["project"],
    variablesFn: (context, variables) => ({
      ...variables,
      pathParams: { id: context.meta.id },
    }),
  });
  const options = useProject({ signal: inputSignal });
  await options.queryFn({ signal, meta: { id: 456 } });
  assert.equal(client.requests[0].url, "/projects/456");
  assert.equal(client.requests[0].signal, signal);
});

test("infinite queries forward page variables and abort signals and unwrap page data", async () => {
  const client = new RecordingClient();
  const data = [{ id: 1 }];
  client.response = { data, status: 200, headers: {} };
  const signal = new AbortController().signal;
  const useProjects = createEndpointFactory(client).createInfiniteQuery({
    path: "/users/:id/projects",
    key: ["projects", 7],
    variablesFn: (context, variables) => ({
      ...variables,
      params: context.pageParam,
    }),
  });
  const options = useProjects({ pathParams: { id: 7 } }, {});
  const page = await options.queryFn({
    signal,
    pageParam: { offset: 20, limit: 10 },
  });
  assert.equal(page, data);
  assert.equal(client.requests[0].url, "/users/7/projects");
  assert.deepEqual(client.requests[0].params, { offset: 20, limit: 10 });
  assert.equal(client.requests[0].signal, signal);
});

test("mutations unwrap payloads and forward method, data, metadata, and signals", async () => {
  const client = new RecordingClient();
  const endpoint = createEndpointFactory(client);
  const data = { id: 123 };
  const signal = new AbortController().signal;
  client.response = { data, status: 201, headers: {} };
  for (const method of [undefined, "post", "put", "patch", "delete"]) {
    const useMutation = endpoint.createMutation({
      path: "/projects/:id",
      key: ["save"],
      method,
      headers: { Accept: "application/json" },
    });
    const variables = {
      pathParams: { id: 123 },
      data: { name: "Alex" },
      params: { notify: true },
      signal,
      headers: { Authorization: "token" },
    };
    assert.equal(await useMutation.execute(variables), data);
    const request = client.requests.at(-1);
    assert.equal(request.method, (method ?? "post").toUpperCase());
    assert.equal(request.url, "/projects/123");
    assert.equal(request.data, variables.data);
    assert.equal(request.signal, signal);
    assert.equal(request.params, variables.params);
    assert.deepEqual(request.headers, {
      Accept: "application/json",
      Authorization: "token",
    });
    assert.equal(await useMutation().mutationFn(variables), data);
  }
});

test("factory execute preserves errors and query error callbacks", async () => {
  const client = new RecordingClient();
  const controller = new AbortController();
  const reason = new Error("cancelled");
  controller.abort(reason);
  const errors = [];
  const endpoint = createEndpointFactory(client);
  const useProject = endpoint.createQuery({
    path: "/projects",
    key: ["projects"],
    onError: (error) => errors.push(error),
  });
  await assert.rejects(
    useProject.execute({ signal: controller.signal }),
    (error) => error === reason,
  );
  assert.equal(errors[0], reason);
  const useSave = endpoint.createMutation({ path: "/projects", key: ["save"] });
  await assert.rejects(
    useSave.execute({ signal: controller.signal }),
    (error) => error === reason,
  );
});

test("shared GET requests omit bodies even when variables include data", async () => {
  const client = new RecordingClient();
  const request = createRequest(client, {
    path: "/projects",
    key: ["projects"],
  });
  await request({ data: { ignored: true } });
  assert.equal(client.requests[0].method, "GET");
  assert.equal(Object.hasOwn(client.requests[0], "data"), false);
});

test("mutations await endpoint success callbacks for execute and hook requests", async () => {
  const client = new RecordingClient();
  const data = { id: 123 };
  const successes = [];
  client.response = { data, status: 201, headers: {} };
  const useSave = createMutationFactory(client)({
    path: "/projects",
    key: ["save"],
    onSuccess: async (payload) => {
      await Promise.resolve();
      successes.push(payload);
    },
  });
  assert.equal(await useSave.execute({}), data);
  assert.deepEqual(successes, [data]);
  // TanStack passes a context as the second argument, not an abort signal.
  assert.equal(await useSave().mutationFn({}, { client: {} }), data);
  assert.deepEqual(successes, [data, data]);
  assert.equal(client.requests[1].signal, undefined);
});

test("mutations await endpoint error callbacks and preserve transport errors", async () => {
  const client = new RecordingClient();
  const controller = new AbortController();
  const reason = new Error("cancelled");
  controller.abort(reason);
  const errors = [];
  const useSave = createMutationFactory(client)({
    path: "/projects",
    key: ["save"],
    onError: async (error) => {
      await Promise.resolve();
      errors.push(error);
    },
  });
  for (const request of [useSave.execute, useSave().mutationFn]) {
    await assert.rejects(
      request({ signal: controller.signal }),
      (error) => error === reason,
    );
  }
  assert.deepEqual(errors, [reason, reason]);
});

function createHookHarness(kind, endpoint, config, callbacks) {
  const signal = new AbortController().signal;

  if (kind === "mutation") {
    const hook = endpoint.createMutation(config);
    const options = hook({ ...callbacks, retry: false });
    return {
      options,
      run: () => options.mutationFn({}),
      execute: hook.execute,
    };
  }

  if (kind === "infinite query") {
    const hook = endpoint.createInfiniteQuery(config);
    const options = hook(
      {},
      {
        ...callbacks,
        retry: false,
        initialPageParam: { offset: 0 },
        getNextPageParam: () => undefined,
      },
    );
    return {
      options,
      run: () => options.queryFn({ signal, pageParam: { offset: 0 } }),
    };
  }

  const hook = endpoint.createQuery(config);
  const options = hook({}, { ...callbacks, retry: false });
  return {
    options,
    run: () => options.queryFn({ signal }),
    execute: hook.execute,
  };
}

for (const kind of ["query", "infinite query", "mutation"]) {
  test(`${kind} awaits endpoint then hook success callbacks without registering native callbacks`, async () => {
    const client = new RecordingClient();
    const data = { id: 123 };
    client.response = { data, status: 200, headers: {} };
    const events = [];
    const harness = createHookHarness(
      kind,
      createEndpointFactory(client),
      {
        path: "/projects",
        key: ["projects"],
        onSuccess: async (payload) => {
          await Promise.resolve();
          assert.equal(payload, data);
          events.push("endpoint");
        },
      },
      {
        onSuccess: async (payload) => {
          await Promise.resolve();
          assert.equal(payload, data);
          events.push("hook");
        },
        onError: () => assert.fail("Unexpected hook error callback"),
      },
    );

    assert.deepEqual(events, []);
    assert.equal(Object.hasOwn(harness.options, "onSuccess"), false);
    assert.equal(Object.hasOwn(harness.options, "onError"), false);
    assert.equal(harness.options.retry, false);
    assert.equal(await harness.run(), data);
    assert.deepEqual(events, ["endpoint", "hook"]);

    if (harness.execute) {
      events.length = 0;
      await harness.execute({});
      assert.deepEqual(events, ["endpoint"]);
    }
  });

  test(`${kind} awaits endpoint then hook error callbacks and preserves rejection`, async () => {
    const client = new RecordingClient();
    const error = new Error("Network failure");
    client.send = async () => {
      throw error;
    };
    const events = [];
    const harness = createHookHarness(
      kind,
      createEndpointFactory(client),
      {
        path: "/projects",
        key: ["projects"],
        onError: async (received) => {
          await Promise.resolve();
          assert.equal(received, error);
          events.push("endpoint");
        },
      },
      {
        onError: async (received) => {
          await Promise.resolve();
          assert.equal(received, error);
          events.push("hook");
        },
        onSuccess: () => assert.fail("Unexpected hook success callback"),
      },
    );

    await assert.rejects(harness.run(), (received) => received === error);
    assert.deepEqual(events, ["endpoint", "hook"]);
  });
}

test("hook callback options infer payload and error types across all factories", () => {
  const file = new URL(
    "../packages/endpoint/src/hook-callback.contract-check.ts",
    import.meta.url,
  ).pathname;
  const source = `
    import { createEndpointFactory } from './factories/create-endpoint.factory';
    import type { HttpClient } from './http';
    declare const client: HttpClient;
    const endpoint = createEndpointFactory(client);
    type Project = { id: number };
    const useProject = endpoint.createQuery<Project, Error>({ path: '/projects', key: ['projects'] });
    useProject({}, { onSuccess: data => { const id: number = data.id; }, onError: error => { const message: string = error.message; } });
    const useSave = endpoint.createMutation<Project, Error>({ path: '/projects', key: ['save'] });
    useSave({ onSuccess: data => { const id: number = data.id; }, onError: error => { const message: string = error.message; } });
    const usePages = endpoint.createInfiniteQuery<Project[], Error>({ path: '/projects', key: ['pages'] });
    usePages({}, { initialPageParam: { offset: 0 }, getNextPageParam: () => undefined, onSuccess: page => { const first: Project | undefined = page[0]; }, onError: error => { const message: string = error.message; } });
    // @ts-expect-error Query callbacks receive the decoded payload
    useProject({}, { onSuccess: (data: string) => {} });
    // @ts-expect-error Mutation callbacks use the same payload contract
    useSave({ onSuccess: (data: string) => {} });
  `;
  const options = {
    noEmit: true,
    strict: true,
    skipLibCheck: true,
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
  };
  const host = ts.createCompilerHost(options);
  const originalRead = host.readFile.bind(host);
  const originalExists = host.fileExists.bind(host);
  host.readFile = (path) => (path === file ? source : originalRead(path));
  host.fileExists = (path) => path === file || originalExists(path);
  const program = ts.createProgram([file], options, host);
  const diagnostics = ts.getPreEmitDiagnostics(program);
  const messages = ts.formatDiagnosticsWithColorAndContext(diagnostics, {
    getCanonicalFileName: (path) => path,
    getCurrentDirectory: () => process.cwd(),
    getNewLine: () => "\n",
  });
  assert.equal(diagnostics.length, 0, messages);
});

test("standard queries isolate variables, exclude signals, and preserve invalidation prefixes", async () => {
  const client = new RecordingClient();
  client.send = async (request) => {
    client.requests.push(request);
    return { data: { url: request.url }, status: 200, headers: {} };
  };
  const cache = new QueryClient({
    defaultOptions: {
      queries: { staleTime: Infinity, gcTime: 0, retry: false },
    },
  });
  const useUser = createQueryFactory(client)({
    path: "/users/:id",
    key: ["users"],
  });

  try {
    for (const id of [1, 2]) {
      const options = useUser(
        { pathParams: { id }, signal: new AbortController().signal },
        { queryKey: ["details"] },
      );
      const data = await cache.fetchQuery(options);
      assert.equal(data.url, `/users/${id}`);
      assert.equal(options.queryKey[0], "users");
      assert.equal(options.queryKey[1], "details");
    }
    await cache.fetchQuery(
      useUser(
        { pathParams: { id: 2 }, signal: new AbortController().signal },
        { queryKey: ["details"] },
      ),
    );
    assert.equal(client.requests.length, 2);
    await cache.invalidateQueries({ queryKey: ["users"] });
    assert.ok(
      cache
        .getQueryCache()
        .getAll()
        .every((query) => query.state.isInvalidated),
    );
    assert.equal(cache.getQueryCache().getAll().length, 2);
  } finally {
    cache.clear();
  }
});

test("query keys distinguish filters and headers as well as path parameters", () => {
  const useProjects = createQueryFactory(new RecordingClient())({
    path: "/projects",
    key: ["projects"],
  });
  const first = useProjects({
    params: { name: "Alex" },
    headers: { "x-tenant": "one" },
  });
  const filterChanged = useProjects({
    params: { name: "Sam" },
    headers: { "x-tenant": "one" },
  });
  const headerChanged = useProjects({
    params: { name: "Alex" },
    headers: { "x-tenant": "two" },
  });
  assert.notDeepEqual(first.queryKey, filterChanged.queryKey);
  assert.notDeepEqual(first.queryKey, headerChanged.queryKey);
});

test("real infinite pagination advances page parameters and separates resources", async () => {
  const client = new RecordingClient();
  client.send = async (request) => {
    client.requests.push(request);
    return {
      data: { url: request.url, offset: request.params.offset },
      status: 200,
      headers: {},
    };
  };
  const cache = new QueryClient({
    defaultOptions: {
      queries: { staleTime: Infinity, gcTime: 0, retry: false },
    },
  });
  const useProjects = createInfiniteQueryFactory(client)({
    path: "/users/:id/projects",
    key: ["projects"],
  });
  const pagination = {
    initialPageParam: { offset: 0 },
    getNextPageParam: (lastPage) => ({ offset: lastPage.offset + 10 }),
    queryKey: ["list"],
  };

  try {
    const firstOptions = useProjects(
      {
        pathParams: { id: 1 },
        params: { limit: 10, offset: 99, name: "Alex" },
      },
      pagination,
    );
    const observer = new InfiniteQueryObserver(cache, firstOptions);
    await observer.refetch();
    const next = await observer.fetchNextPage();
    assert.deepEqual(
      next.data.pages.map((page) => page.offset),
      [0, 10],
    );
    assert.deepEqual(
      client.requests.slice(0, 2).map((request) => request.params),
      [
        { limit: 10, offset: 0, name: "Alex" },
        { limit: 10, offset: 10, name: "Alex" },
      ],
    );

    const secondOptions = useProjects(
      {
        pathParams: { id: 2 },
        params: { limit: 10, offset: 99, name: "Alex" },
      },
      pagination,
    );
    const second = await cache.fetchInfiniteQuery(secondOptions);
    assert.equal(second.pages[0].url, "/users/2/projects");
    assert.equal(client.requests.length, 3);
    assert.equal(secondOptions.queryKey[0], "projects");
    assert.equal(secondOptions.queryKey[1], "list");
    await cache.invalidateQueries({ queryKey: ["projects"] });
    assert.equal(cache.getQueryCache().getAll().length, 2);
    assert.ok(
      cache
        .getQueryCache()
        .getAll()
        .every((query) => query.state.isInvalidated),
    );
    observer.destroy();
  } finally {
    cache.clear();
  }
});

test("custom pagination mapping remains authoritative", async () => {
  const client = new RecordingClient();
  const useProjects = createInfiniteQueryFactory(client)({
    path: "/projects",
    key: ["projects"],
    variablesFn: (context, variables) => ({
      ...variables,
      params: { cursor: context.pageParam.offset },
    }),
  });
  const options = useProjects(
    { params: { ignored: true } },
    { initialPageParam: { offset: 20 }, getNextPageParam: () => undefined },
  );
  await options.queryFn({
    signal: new AbortController().signal,
    pageParam: { offset: 20 },
  });
  assert.deepEqual(client.requests[0].params, { cursor: 20 });
});
