import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandSwipeRightBold } from "../bold";
import { HandSwipeRightDuotone } from "../duotone";
import { HandSwipeRightFill } from "../fill";
import { HandSwipeRightLight } from "../light";
import { HandSwipeRightRegular } from "../regular";
import { HandSwipeRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandSwipeRight = memo(function HandSwipeRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandSwipeRightBold,
      duotone: HandSwipeRightDuotone,
      fill: HandSwipeRightFill,
      light: HandSwipeRightLight,
      regular: HandSwipeRightRegular,
      thin: HandSwipeRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
