import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GearSixBold } from "../bold";
import { GearSixDuotone } from "../duotone";
import { GearSixFill } from "../fill";
import { GearSixLight } from "../light";
import { GearSixRegular } from "../regular";
import { GearSixThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GearSix = memo(function GearSix(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GearSixBold,
      duotone: GearSixDuotone,
      fill: GearSixFill,
      light: GearSixLight,
      regular: GearSixRegular,
      thin: GearSixThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
