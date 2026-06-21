import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HamburgerBoldIcon } from "../bold";
import { HamburgerDuotoneIcon } from "../duotone";
import { HamburgerFillIcon } from "../fill";
import { HamburgerLightIcon } from "../light";
import { HamburgerRegularIcon } from "../regular";
import { HamburgerThinIcon } from "../thin";

export const HamburgerIcon = memo(function Hamburger(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HamburgerBoldIcon,
      duotone: HamburgerDuotoneIcon,
      fill: HamburgerFillIcon,
      light: HamburgerLightIcon,
      regular: HamburgerRegularIcon,
      thin: HamburgerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
