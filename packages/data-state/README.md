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

`EmptyView` and `ErrorView` always render their supplied children. Their only
container-specific option is `contentContainerStyle`, which styles the inner
content separately from the outer `style`. They accept native/themed View props
and children; text, action, `variant`, `isEmpty`, and `error` props are not part
of their API. Use `DataView` for automatic state selection and configured details.

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

Both `LoadingView` and `DataView` infer `loadingComponentProps` from
`LoadingComponent`. Supply it when the loader has required props:

```tsx
<LoadingView
  loading={isLoading}
  LoadingComponent={CustomLoader}
  loadingComponentProps={{ label: "Loading projects", size: 24 }}
/>
```

Here `CustomLoader` declares `label: string` and `size?: number`. Incorrect or
unknown props are rejected. Loaders with only optional props can omit
`loadingComponentProps`. Loader props come only from the supplied component;
no props are injected. Pass `tone` through `loadingComponentProps` if your loader
declares it.

## Repository palette consistency

DataView and its internal state details/actions accept tone (default primary).
The icon accent and default action buttons use the same tone, with per-state tone
overrides allowed in errorViewProps/emptyViewProps. Custom loaders receive only
their explicitly supplied loadingComponentProps.
Details icon tokens move to dataState.details.colors[tone]. Skeletons remain neutral.

## Agent and design reference

Start with the [capability guide](../../docs/design-system/capabilities/data-state.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../../docs/design-system/component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.
