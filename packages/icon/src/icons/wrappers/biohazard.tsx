import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BiohazardBold } from "../bold";
import { BiohazardDuotone } from "../duotone";
import { BiohazardFill } from "../fill";
import { BiohazardLight } from "../light";
import { BiohazardRegular } from "../regular";
import { BiohazardThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Biohazard = memo(function Biohazard(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BiohazardBold,
      duotone: BiohazardDuotone,
      fill: BiohazardFill,
      light: BiohazardLight,
      regular: BiohazardRegular,
      thin: BiohazardThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
