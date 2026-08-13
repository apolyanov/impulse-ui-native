# @impulse-ui-native/data-state

Reusable loading, empty, error, and content-state composition for data-backed screens.

## Installation

```sh
pnpm add @impulse-ui-native/data-state
```

## Main exports

- `LoadingView` swaps content for a caller-provided loading component.
- `EmptyView` renders empty-state copy and primary or secondary actions when `isEmpty` is true.
- `ErrorView` renders error-state copy and actions when an error is present.
- `DataView` coordinates loading, error, empty, and successful-content states in one component.
- Public prop types describe each state view and its action footer.

## Usage

```tsx
import { ActivityIndicator } from "react-native";

import { DataView } from "@impulse-ui-native/data-state";

<DataView
  loading={query.isLoading}
  error={query.error}
  isEmpty={!query.data?.length}
  LoadingComponent={ActivityIndicator}
  errorViewProps={{
    text: "Could not load projects.",
    primaryActionLabel: "Try again",
    onPressPrimaryAction: query.refetch,
  }}
  emptyViewProps={{
    text: "No projects yet.",
    primaryActionLabel: "Create project",
    onPressPrimaryAction: openCreateProject,
  }}
>
  <ProjectList projects={query.data ?? []} />
</DataView>;
```

The views use component tokens from `ThemeProvider` for their layout, layering, and presentation.
