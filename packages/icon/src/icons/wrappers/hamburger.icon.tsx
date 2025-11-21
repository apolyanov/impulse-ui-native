import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HamburgerBoldIcon } from "../bold";
import { HamburgerDuotoneIcon } from "../duotone";
import { HamburgerFillIcon } from "../fill";
import { HamburgerLightIcon } from "../light";
import { HamburgerRegularIcon } from "../regular";
import { HamburgerThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
