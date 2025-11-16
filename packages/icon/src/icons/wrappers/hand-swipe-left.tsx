import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandSwipeLeftBold } from "../bold";
import { HandSwipeLeftDuotone } from "../duotone";
import { HandSwipeLeftFill } from "../fill";
import { HandSwipeLeftLight } from "../light";
import { HandSwipeLeftRegular } from "../regular";
import { HandSwipeLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandSwipeLeft = memo(function HandSwipeLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandSwipeLeftBold,
      duotone: HandSwipeLeftDuotone,
      fill: HandSwipeLeftFill,
      light: HandSwipeLeftLight,
      regular: HandSwipeLeftRegular,
      thin: HandSwipeLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
