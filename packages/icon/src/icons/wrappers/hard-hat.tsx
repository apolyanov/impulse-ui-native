import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HardHatBold } from "../bold";
import { HardHatDuotone } from "../duotone";
import { HardHatFill } from "../fill";
import { HardHatLight } from "../light";
import { HardHatRegular } from "../regular";
import { HardHatThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HardHat = memo(function HardHat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HardHatBold,
      duotone: HardHatDuotone,
      fill: HardHatFill,
      light: HardHatLight,
      regular: HardHatRegular,
      thin: HardHatThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
