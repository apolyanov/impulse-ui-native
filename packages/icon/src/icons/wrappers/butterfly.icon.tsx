import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ButterflyBoldIcon } from "../bold/butterfly-bold.icon";
import { ButterflyDuotoneIcon } from "../duotone/butterfly-duotone.icon";
import { ButterflyFillIcon } from "../fill/butterfly-fill.icon";
import { ButterflyLightIcon } from "../light/butterfly-light.icon";
import { ButterflyRegularIcon } from "../regular/butterfly-regular.icon";
import { ButterflyThinIcon } from "../thin/butterfly-thin.icon";

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
