# @impulse-ui-native/data-state

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

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


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/data-state/src/components/data-view.tsx

```tsx
import { memo, PropsWithChildren, useMemo } from "react";

import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { DataViewProps } from "../types";
import { EmptyDetails } from "./empty-details";
import { ErrorDetails } from "./error-details";
import { LoadingView } from "./loading-view";

export const DataView = memo((props: PropsWithChildren<DataViewProps>) => {
  const tokens = useComponentsTokens();

  const dataStateTokens = tokens.dataState;
  const {
    error,
    isEmpty,
    loading,
    errorViewProps,
    emptyViewProps,
    LoadingComponent,
    contentContainerStyle,
    children,
    ...rest
  } = props;

  const content = useMemo(() => {
    if (!error && !isEmpty) {
      return null;
    }

    return (
      <View
        alignItems="center"
        justifyContent="center"
        zIndex={dataStateTokens.content.zIndex}
      >
        {error ? <ErrorDetails {...errorViewProps} /> : null}
        {isEmpty ? <EmptyDetails {...emptyViewProps} /> : null}
      </View>
    );
  }, [
    dataStateTokens.content.zIndex,
    emptyViewProps,
    error,
    errorViewProps,
    isEmpty,
  ]);

  return (
    <LoadingView
      {...rest}
      LoadingComponent={LoadingComponent}
      contentContainerStyle={contentContainerStyle}
      loading={loading}
    >
      {!error && !isEmpty ? children : null}
      {content}
    </LoadingView>
  );
});
```

### packages/data-state/src/components/empty-view.tsx

```tsx
import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";

import { EmptyViewProps } from "../types";

export const EmptyView = memo(function EmptyView(props: EmptyViewProps) {
  const {
    variant,
    text,
    isEmpty,
    onPressPrimaryAction,
    primaryActionLabel,
    onPressSecondaryAction,
    secondaryActionLabel,
    contentContainerStyle,
    children,
    ...rest
  } = props;

  return (
    <View {...rest}>
      <View style={contentContainerStyle}>{children}</View>
    </View>
  );
});
```

### packages/data-state/src/components/error-view.tsx

```tsx
import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";

import { ErrorViewProps } from "../types";

export const ErrorView = memo(function ErrorView(props: ErrorViewProps) {
  const {
    variant,
    text,
    error,
    onPressPrimaryAction,
    onPressSecondaryAction,
    primaryActionLabel,
    secondaryActionLabel,
    contentContainerStyle,
    children,
    ...rest
  } = props;

  return (
    <View {...rest}>
      <View style={contentContainerStyle}>{children}</View>
    </View>
  );
});
```

### packages/data-state/src/components/index.ts

```tsx
export { ErrorView } from "./error-view";
export { EmptyView } from "./empty-view";
export { LoadingView } from "./loading-view";
export { DataView } from "./data-view";
```

### packages/data-state/src/components/loading-view.tsx

```tsx
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { LayoutChangeEvent, StyleProp, ViewStyle } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { LoadingViewProps } from "../types";

export const LoadingView = memo(function LoadingView(props: LoadingViewProps) {
  const {
    loading,
    children,
    LoadingComponent,
    contentContainerStyle,
    style,
    ...rest
  } = props;

  const tokens = useComponentsTokens();

  const loadingTokens = tokens.dataState.loading;

  const [shouldMountLoader, setShouldMountLoader] = useState(loading);
  const [loaderHeight, setLoaderHeight] = useState(0);

  const loaderOpacity = useSharedValue(loading ? 1 : 0);
  const childrenOpacity = useSharedValue(loading ? 0 : 1);

  const loaderStyles = useAnimatedStyle(() => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: loadingTokens.loaderZIndex,
    opacity: loaderOpacity.value,
  }));

  const childrenStyles = useAnimatedStyle(() => ({
    opacity: childrenOpacity.value,
  }));

  const containerStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        position: "relative",
        minHeight: shouldMountLoader ? loaderHeight : undefined,
      },
      style,
    ],
    [loaderHeight, shouldMountLoader, style],
  );

  const childrenContainerStyles = useMemo(
    () => [contentContainerStyle, childrenStyles],
    [contentContainerStyle, childrenStyles],
  );

  const onLoaderLayout = useCallback((event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;

    setLoaderHeight((prev) => {
      if (prev === height) {
        return prev;
      }

      return height;
    });
  }, []);

  useEffect(() => {
    if (loading) {
      setShouldMountLoader(true);

      loaderOpacity.value = 1;
      childrenOpacity.value = 0;

      return;
    }

    loaderOpacity.value = withTiming(
      0,
      {
        duration: loadingTokens.transitionDuration,
        easing: Easing.linear,
      },
      (finished) => {
        if (finished) {
          scheduleOnRN(setShouldMountLoader, false);
        }
      },
    );

    childrenOpacity.value = withTiming(1, {
      duration: loadingTokens.transitionDuration,
      easing: Easing.linear,
    });
  }, [
    childrenOpacity,
    loaderOpacity,
    loading,
    loadingTokens.transitionDuration,
  ]);

  return (
    <View {...rest} style={containerStyle}>
      <Animated.View style={childrenContainerStyles}>{children}</Animated.View>

      {shouldMountLoader ? (
        <Animated.View style={loaderStyles} pointerEvents="auto">
          <View onLayout={onLoaderLayout}>
            <LoadingComponent />
          </View>
        </Animated.View>
      ) : null}
    </View>
  );
});
```

### packages/data-state/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/data-state/src/types/index.ts

```tsx
export * from "./state-view.types";
```

### packages/data-state/src/types/state-view.types.ts

```tsx
import { ComponentType, ReactNode } from "react";
import { PressableProps, ViewStyle } from "react-native";

import type { IconProps } from "@impulse-ui-native/icon/types";
import { ViewProps } from "@impulse-ui-native/primitives";

export interface StateActionsFooterProps extends ViewProps {
  onPressPrimaryAction: PressableProps["onPress"];
  primaryActionLabel: string;
  onPressSecondaryAction?: PressableProps["onPress"];
  secondaryActionLabel?: string;
}

export interface StateViewProps extends StateActionsFooterProps, ViewProps {
  text: string;
  variant?: IconProps["variant"];
  contentContainerStyle?: ViewStyle;
}

export interface EmptyViewProps extends StateViewProps {
  isEmpty: boolean;
}

export interface ErrorViewProps extends StateViewProps {
  error: Error | null;
}

export interface LoadingViewProps extends ViewProps {
  loading: boolean;
  LoadingComponent: ComponentType;
  contentContainerStyle?: ViewStyle;
}

export interface DataViewProps extends ViewProps {
  error: ErrorViewProps["error"];
  isEmpty: EmptyViewProps["isEmpty"];
  LoadingComponent: ComponentType;
  loading: LoadingViewProps["loading"];
  contentContainerStyle?: ViewStyle;
  errorViewProps: StateViewProps;
  emptyViewProps: StateViewProps;
}
```
