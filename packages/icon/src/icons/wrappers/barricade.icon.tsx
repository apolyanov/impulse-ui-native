import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BarricadeBoldIcon } from "../bold";
import { BarricadeDuotoneIcon } from "../duotone";
import { BarricadeFillIcon } from "../fill";
import { BarricadeLightIcon } from "../light";
import { BarricadeRegularIcon } from "../regular";
import { BarricadeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
