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

  return (
    <LoadingView
      tone={tone}
      {...rest}
      LoadingComponent={LoadingComponent}
      contentContainerStyle={contentContainerStyle}
      loading={loading}
    >
      {showContent ? children : null}
      {content}
    </LoadingView>
  );
});
