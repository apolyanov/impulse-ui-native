import { memo, PropsWithChildren } from "react";

import { View } from "@impulse-ui-native/primitives";

import { SkeletonContainerProps } from "../types";

export const Container = memo(function Container(
  props: PropsWithChildren<SkeletonContainerProps>,
) {
  return <View {...props} />;
});
