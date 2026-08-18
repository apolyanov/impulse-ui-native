import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandSwipeRightBoldIcon } from "../bold/hand-swipe-right-bold.icon";
import { HandSwipeRightDuotoneIcon } from "../duotone/hand-swipe-right-duotone.icon";
import { HandSwipeRightFillIcon } from "../fill/hand-swipe-right-fill.icon";
import { HandSwipeRightLightIcon } from "../light/hand-swipe-right-light.icon";
import { HandSwipeRightRegularIcon } from "../regular/hand-swipe-right-regular.icon";
import { HandSwipeRightThinIcon } from "../thin/hand-swipe-right-thin.icon";

export const HandSwipeRightIcon = memo(function HandSwipeRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandSwipeRightBoldIcon,
      duotone: HandSwipeRightDuotoneIcon,
      fill: HandSwipeRightFillIcon,
      light: HandSwipeRightLightIcon,
      regular: HandSwipeRightRegularIcon,
      thin: HandSwipeRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
