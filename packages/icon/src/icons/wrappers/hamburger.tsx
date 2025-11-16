import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HamburgerBold } from "../bold";
import { HamburgerDuotone } from "../duotone";
import { HamburgerFill } from "../fill";
import { HamburgerLight } from "../light";
import { HamburgerRegular } from "../regular";
import { HamburgerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Hamburger = memo(function Hamburger(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HamburgerBold,
      duotone: HamburgerDuotone,
      fill: HamburgerFill,
      light: HamburgerLight,
      regular: HamburgerRegular,
      thin: HamburgerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
