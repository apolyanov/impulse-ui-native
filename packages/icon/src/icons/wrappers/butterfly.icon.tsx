import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ButterflyBoldIcon } from "../bold";
import { ButterflyDuotoneIcon } from "../duotone";
import { ButterflyFillIcon } from "../fill";
import { ButterflyLightIcon } from "../light";
import { ButterflyRegularIcon } from "../regular";
import { ButterflyThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ButterflyIcon = memo(function Butterfly(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ButterflyBoldIcon,
      duotone: ButterflyDuotoneIcon,
      fill: ButterflyFillIcon,
      light: ButterflyLightIcon,
      regular: ButterflyRegularIcon,
      thin: ButterflyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
