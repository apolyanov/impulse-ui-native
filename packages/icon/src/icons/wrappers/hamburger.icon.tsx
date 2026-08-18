import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HamburgerBoldIcon } from "../bold/hamburger-bold.icon";
import { HamburgerDuotoneIcon } from "../duotone/hamburger-duotone.icon";
import { HamburgerFillIcon } from "../fill/hamburger-fill.icon";
import { HamburgerLightIcon } from "../light/hamburger-light.icon";
import { HamburgerRegularIcon } from "../regular/hamburger-regular.icon";
import { HamburgerThinIcon } from "../thin/hamburger-thin.icon";

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
