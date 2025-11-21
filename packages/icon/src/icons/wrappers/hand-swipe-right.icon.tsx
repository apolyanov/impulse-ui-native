import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandSwipeRightBoldIcon } from "../bold";
import { HandSwipeRightDuotoneIcon } from "../duotone";
import { HandSwipeRightFillIcon } from "../fill";
import { HandSwipeRightLightIcon } from "../light";
import { HandSwipeRightRegularIcon } from "../regular";
import { HandSwipeRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandSwipeRightIcon = memo(function HandSwipeRight(
  props: IconWrapperProps
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
