import type { PropsWithChildren } from "react";
import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";

import type { SkeletonContainerProps } from "../types";

export const Container = memo(function Container(
  props: PropsWithChildren<SkeletonContainerProps>,
) {
  return <View {...props} />;
});
