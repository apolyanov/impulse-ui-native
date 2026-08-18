import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpiralBoldIcon } from "../bold/spiral-bold.icon";
import { SpiralDuotoneIcon } from "../duotone/spiral-duotone.icon";
import { SpiralFillIcon } from "../fill/spiral-fill.icon";
import { SpiralLightIcon } from "../light/spiral-light.icon";
import { SpiralRegularIcon } from "../regular/spiral-regular.icon";
import { SpiralThinIcon } from "../thin/spiral-thin.icon";

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
