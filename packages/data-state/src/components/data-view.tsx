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
