import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BarricadeBoldIcon } from "../bold/barricade-bold.icon";
import { BarricadeDuotoneIcon } from "../duotone/barricade-duotone.icon";
import { BarricadeFillIcon } from "../fill/barricade-fill.icon";
import { BarricadeLightIcon } from "../light/barricade-light.icon";
import { BarricadeRegularIcon } from "../regular/barricade-regular.icon";
import { BarricadeThinIcon } from "../thin/barricade-thin.icon";

export const BarricadeIcon = memo(function Barricade(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BarricadeBoldIcon,
      duotone: BarricadeDuotoneIcon,
      fill: BarricadeFillIcon,
      light: BarricadeLightIcon,
      regular: BarricadeRegularIcon,
      thin: BarricadeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
