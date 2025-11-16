import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NavigationArrowBold } from "../bold";
import { NavigationArrowDuotone } from "../duotone";
import { NavigationArrowFill } from "../fill";
import { NavigationArrowLight } from "../light";
import { NavigationArrowRegular } from "../regular";
import { NavigationArrowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NavigationArrow = memo(function NavigationArrow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NavigationArrowBold,
      duotone: NavigationArrowDuotone,
      fill: NavigationArrowFill,
      light: NavigationArrowLight,
      regular: NavigationArrowRegular,
      thin: NavigationArrowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
