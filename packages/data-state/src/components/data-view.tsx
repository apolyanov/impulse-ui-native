import { memo, PropsWithChildren, useMemo } from "react";

import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import { DataViewProps } from "../types";
import { EmptyDetails } from "./empty-details";
import { ErrorDetails } from "./error-details";
import { LoadingView } from "./loading-view";

export const DataView = memo((props: PropsWithChildren<DataViewProps>) => {
  const tokens = useComponentsTokens().dataState;
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
        zIndex={tokens.content.zIndex}
      >
        {error ? <ErrorDetails {...errorViewProps} /> : null}
        {isEmpty ? <EmptyDetails {...emptyViewProps} /> : null}
      </View>
    );
  }, [error, isEmpty, errorViewProps, emptyViewProps, tokens.content.zIndex]);

  return (
    <LoadingView
      {...rest}
      LoadingComponent={LoadingComponent}
      contentContainerStyle={contentContainerStyle}
      loading={loading}
    >
      {!error && !isEmpty && !loading ? children : null}
      {content}
    </LoadingView>
  );
});
