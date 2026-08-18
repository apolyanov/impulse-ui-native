import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BiohazardBoldIcon } from "../bold/biohazard-bold.icon";
import { BiohazardDuotoneIcon } from "../duotone/biohazard-duotone.icon";
import { BiohazardFillIcon } from "../fill/biohazard-fill.icon";
import { BiohazardLightIcon } from "../light/biohazard-light.icon";
import { BiohazardRegularIcon } from "../regular/biohazard-regular.icon";
import { BiohazardThinIcon } from "../thin/biohazard-thin.icon";

export const BiohazardIcon = memo(function Biohazard(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BiohazardBoldIcon,
      duotone: BiohazardDuotoneIcon,
      fill: BiohazardFillIcon,
      light: BiohazardLightIcon,
      regular: BiohazardRegularIcon,
      thin: BiohazardThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
