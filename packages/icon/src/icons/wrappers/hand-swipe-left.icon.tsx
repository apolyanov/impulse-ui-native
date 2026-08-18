import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandSwipeLeftBoldIcon } from "../bold/hand-swipe-left-bold.icon";
import { HandSwipeLeftDuotoneIcon } from "../duotone/hand-swipe-left-duotone.icon";
import { HandSwipeLeftFillIcon } from "../fill/hand-swipe-left-fill.icon";
import { HandSwipeLeftLightIcon } from "../light/hand-swipe-left-light.icon";
import { HandSwipeLeftRegularIcon } from "../regular/hand-swipe-left-regular.icon";
import { HandSwipeLeftThinIcon } from "../thin/hand-swipe-left-thin.icon";

export const HandSwipeLeftIcon = memo(function HandSwipeLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandSwipeLeftBoldIcon,
      duotone: HandSwipeLeftDuotoneIcon,
      fill: HandSwipeLeftFillIcon,
      light: HandSwipeLeftLightIcon,
      regular: HandSwipeLeftRegularIcon,
      thin: HandSwipeLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
