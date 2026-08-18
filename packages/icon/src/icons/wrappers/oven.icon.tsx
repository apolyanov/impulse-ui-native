import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { OvenBoldIcon } from "../bold/oven-bold.icon";
import { OvenDuotoneIcon } from "../duotone/oven-duotone.icon";
import { OvenFillIcon } from "../fill/oven-fill.icon";
import { OvenLightIcon } from "../light/oven-light.icon";
import { OvenRegularIcon } from "../regular/oven-regular.icon";
import { OvenThinIcon } from "../thin/oven-thin.icon";

export const OvenIcon = memo(function Oven(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OvenBoldIcon,
      duotone: OvenDuotoneIcon,
      fill: OvenFillIcon,
      light: OvenLightIcon,
      regular: OvenRegularIcon,
      thin: OvenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
