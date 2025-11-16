import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ButterflyBold } from "../bold";
import { ButterflyDuotone } from "../duotone";
import { ButterflyFill } from "../fill";
import { ButterflyLight } from "../light";
import { ButterflyRegular } from "../regular";
import { ButterflyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Butterfly = memo(function Butterfly(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ButterflyBold,
      duotone: ButterflyDuotone,
      fill: ButterflyFill,
      light: ButterflyLight,
      regular: ButterflyRegular,
      thin: ButterflyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
