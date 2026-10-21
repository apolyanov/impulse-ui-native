import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import vm from "node:vm";

const require = createRequire(import.meta.url);
const directory = path.dirname(require.resolve("@changesets/cli/package.json"));

// Exercise the installed patch without registry requests or publishing. Both
// distributed entrypoints must retry the new pnpm error through delegated auth.
for (const entry of ["changesets-cli.cjs.js", "changesets-cli.esm.js"]) {
  const source = fs.readFileSync(path.join(directory, "dist", entry), "utf8");
  const start = source.indexOf("async function internalPublish(");
  const end = source.indexOf("\nfunction publish$1(", start);
  assert(start !== -1 && end !== -1, "Changesets publishing internals changed");

  for (const isTTY of [true, false]) {
    const calls = [];
    const concurrency = [];
    const state = { isRequired: false, allowConcurrency: false };
    const spawn = (command, args, options) => {
      calls.push({ command, args, options });
      if (calls.length === 1) {
        return Promise.resolve({
          code: 1,
          stdout: "",
          stderr: JSON.stringify({
            error: { code: "ERR_PNPM_OTP_NON_INTERACTIVE" },
          }),
        });
      }
      const child = Promise.resolve({ code: 0, stderr: "" });
      child.on = () => child;
      return child;
    };
    const publish = vm.runInNewContext(`(${source.slice(start, end)})`, {
      getPublishTool: async () => ({
        name: "pnpm",
        shouldAddNoGitChecks: true,
      }),
      getCorrectRegistry: () => ({ registry: "https://registry.npmjs.org" }),
      requiresDelegatedAuth: (value) =>
        isTTY && value.isRequired && !value.allowConcurrency && !value.token,
      spawn__default: { default: spawn },
      spawn$1: spawn,
      spawn,
      process: { stdin: { isTTY }, env: {}, stderr: { write() {} } },
      getLastJsonObjectFromString: (value) =>
        value ? JSON.parse(value) : null,
      npmPublishQueue: { setConcurrency: (value) => concurrency.push(value) },
      NPM_PUBLISH_CONCURRENCY_LIMIT: 10,
      isAlreadyPublishedError: () => false,
      logger: { error() {}, warn() {} },
      error() {},
      warn() {},
    });
    const options = { cwd: "/mock-package", tag: "latest", access: "public" };
    const first = await publish({ name: "test-package" }, options, state);
    assert.equal(first.allowRetry, isTTY ? true : undefined);
    assert.equal(first.result, "failed");
    if (isTTY) {
      assert.equal(state.isRequired, true);
      assert.equal(concurrency[0], 1);
      const second = await publish({ name: "test-package" }, options, state);
      assert.equal(second.result, "published");
      assert.equal(calls[1].options.stdio[0], "inherit");
      assert.equal(calls[1].options.stdio[1], "inherit");
      assert.equal(calls[1].args.includes("--json"), false);
      assert.equal(state.allowConcurrency, true);
      assert.equal(concurrency.at(-1), 10);
    } else {
      assert.equal(calls.length, 1, "Noninteractive publishing must not loop");
    }
  }
}

console.log("Changesets pnpm authentication retry checks passed.");
