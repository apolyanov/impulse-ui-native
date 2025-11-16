import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CrosshairBold } from "../bold";
import { CrosshairDuotone } from "../duotone";
import { CrosshairFill } from "../fill";
import { CrosshairLight } from "../light";
import { CrosshairRegular } from "../regular";
import { CrosshairThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Crosshair = memo(function Crosshair(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CrosshairBold,
      duotone: CrosshairDuotone,
      fill: CrosshairFill,
      light: CrosshairLight,
      regular: CrosshairRegular,
      thin: CrosshairThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
