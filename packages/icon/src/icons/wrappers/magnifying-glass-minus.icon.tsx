import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MagnifyingGlassMinusBoldIcon } from "../bold";
import { MagnifyingGlassMinusDuotoneIcon } from "../duotone";
import { MagnifyingGlassMinusFillIcon } from "../fill";
import { MagnifyingGlassMinusLightIcon } from "../light";
import { MagnifyingGlassMinusRegularIcon } from "../regular";
import { MagnifyingGlassMinusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MagnifyingGlassMinusIcon = memo(function MagnifyingGlassMinus(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MagnifyingGlassMinusBoldIcon,
      duotone: MagnifyingGlassMinusDuotoneIcon,
      fill: MagnifyingGlassMinusFillIcon,
      light: MagnifyingGlassMinusLightIcon,
      regular: MagnifyingGlassMinusRegularIcon,
      thin: MagnifyingGlassMinusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
