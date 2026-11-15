import { Attributes, PropsWithChildren, useMemo } from "react";

import { memo } from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { DataViewProps, LoadingViewProps } from "../types";
import { EmptyDetails } from "./empty-details";
import { ErrorDetails } from "./error-details";
import { LoadingView } from "./loading-view";

export const DataView = memo(function DataView<Props extends object>(
  props: PropsWithChildren<DataViewProps<Props>>,
) {
  const tokens = useComponentsTokens();

  const dataStateTokens = tokens.dataState;
  const {
    error,
    tone = "primary",
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

    const errorTone = errorViewProps.tone ?? tone;
    const emptyTone = emptyViewProps.tone ?? tone;

    return (
      <View
        alignItems="center"
        justifyContent="center"
        zIndex={dataStateTokens.content.zIndex}
      >
        {error ? <ErrorDetails {...errorViewProps} tone={errorTone} /> : null}
        {isEmpty ? <EmptyDetails {...emptyViewProps} tone={emptyTone} /> : null}
      </View>
    );
  }, [
    dataStateTokens.content.zIndex,
    emptyViewProps,
    error,
    errorViewProps,
    tone,
    isEmpty,
  ]);

  const showContent = !error && !isEmpty;
  const loadingViewProps = {
    ...rest,
    LoadingComponent,
    contentContainerStyle,
    loading,
  } as LoadingViewProps<Props> & Attributes;

  return (
    <LoadingView<Props> {...loadingViewProps}>
      {showContent ? children : null}
      {content}
    </LoadingView>
  );
});
