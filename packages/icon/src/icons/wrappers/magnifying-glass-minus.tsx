import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MagnifyingGlassMinusBold } from "../bold";
import { MagnifyingGlassMinusDuotone } from "../duotone";
import { MagnifyingGlassMinusFill } from "../fill";
import { MagnifyingGlassMinusLight } from "../light";
import { MagnifyingGlassMinusRegular } from "../regular";
import { MagnifyingGlassMinusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MagnifyingGlassMinus = memo(function MagnifyingGlassMinus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MagnifyingGlassMinusBold,
      duotone: MagnifyingGlassMinusDuotone,
      fill: MagnifyingGlassMinusFill,
      light: MagnifyingGlassMinusLight,
      regular: MagnifyingGlassMinusRegular,
      thin: MagnifyingGlassMinusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
