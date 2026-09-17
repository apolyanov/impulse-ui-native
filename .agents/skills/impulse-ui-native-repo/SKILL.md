---
name: impulse-ui-native-repo
description: Work effectively in the ImpulseUI Native monorepo using its package boundaries, token architecture, component conventions, Storybook structure, apps, and release workflow. Use for implementation, review, debugging, documentation, or planning in this repository.
---

# ImpulseUI Native repository

Use this skill to avoid rediscovering the repository's architecture and local
conventions. The references are a maintained map, not a substitute for reading
the files being changed.

## Before changing code

1. Check the working tree and preserve unrelated or user-owned changes.
2. Read any `AGENTS.md` in the target subtree. In particular, the site and
   playground carry framework-version instructions.
3. Read [references/architecture.md](references/architecture.md) for package
   ownership and dependency direction.
4. For component or theme work, also read
   [references/component-authoring.md](references/component-authoring.md).
5. For commands, Storybook, apps, changesets, or releases, read
   [references/workflows.md](references/workflows.md).
6. Check [references/known-caveats.md](references/known-caveats.md) when the
   change touches public exports, theme customization, tests, or documentation.

References reflect the repository as reviewed on 2026-09-17. Verify details in
the affected source and manifests when they may have changed.

## Core decisions

- Keep public features in the narrowest package that owns their behavior. The
  toolkit aggregates public packages; it is not the implementation layer.
- Keep generic layout and interaction building blocks in `primitives`. Do not
  treat `primitives/src/components/controls` as a bucket for form controls: it
  is the compound field foundation used by components such as Input and Select.
- Put reusable visual decisions in `theme` component tokens. Consume tokens
  through theme hooks instead of duplicating literal values across packages.
- Preserve standalone package usability. Declare direct workspace imports as
  dependencies and runtime-native requirements as peer dependencies, matching
  the existing manifest pattern.
- Preserve controlled/uncontrolled conventions through
  `useControllableState` where both modes are supported.
- Add public exports deliberately through local barrels, the package root, and
  `toolkit` when aggregation is intended. Icons are a special case and use
  per-icon subpath exports.
- Treat Storybook as product documentation: a component normally has a story,
  examples, and a documentation page usable by both native and web hosts.
- Update the package README and `docs/component-roadmap.md` when public
  capability or status changes. Add a Changeset for release-worthy package
  changes.

## Verification

Choose checks proportional to the change. At minimum, format changed files and
run the affected package's typecheck. For public or cross-package changes, also
run the relevant build and lint checks. Use the root checks before release-scale
work.

Do not claim automated behavioral coverage unless tests were actually added and
run; the repository had no package-level test/spec files at the review date.
