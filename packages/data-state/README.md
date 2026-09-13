# @impulse-ui-native/data-state

Reusable loading, empty, error, and content-state composition for data-backed screens.

## Installation

```sh
pnpm add @impulse-ui-native/data-state react-native-reanimated react-native-worklets
```

Complete the Reanimated and Worklets setup required by your React Native or Expo project.

## Main exports

- `LoadingView` transitions between content and a caller-provided loading component.
- `EmptyView` and `ErrorView` are standalone containers for caller-rendered state content.
- `DataView` coordinates loading, error, empty, and successful-content states and renders the configured state copy and actions.
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
    onPressPrimaryAction: () => query.refetch(),
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

While loading, `DataView` keeps its successful-state children mounted and
visually hidden beneath the loader. Give those children their expected loaded
height to prevent the surrounding layout from shifting when loading finishes.

The views use component tokens from `ThemeProvider` for their layout, layering, and presentation.
