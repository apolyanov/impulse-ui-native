import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpiralBoldIcon } from "../bold";
import { SpiralDuotoneIcon } from "../duotone";
import { SpiralFillIcon } from "../fill";
import { SpiralLightIcon } from "../light";
import { SpiralRegularIcon } from "../regular";
import { SpiralThinIcon } from "../thin";

export const SpiralIcon = memo(function Spiral(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpiralBoldIcon,
      duotone: SpiralDuotoneIcon,
      fill: SpiralFillIcon,
      light: SpiralLightIcon,
      regular: SpiralRegularIcon,
      thin: SpiralThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
