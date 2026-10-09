import { memo } from "react";

import { Typography } from "@impulse-ui-native/primitives";

import type { FlyoutTitleProps } from "../types";

export const FlyoutTitle = memo(function FlyoutTitle(props: FlyoutTitleProps) {
  return <Typography.Title3 {...props} />;
});
