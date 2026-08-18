import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MagnifyingGlassMinusBoldIcon } from "../bold/magnifying-glass-minus-bold.icon";
import { MagnifyingGlassMinusDuotoneIcon } from "../duotone/magnifying-glass-minus-duotone.icon";
import { MagnifyingGlassMinusFillIcon } from "../fill/magnifying-glass-minus-fill.icon";
import { MagnifyingGlassMinusLightIcon } from "../light/magnifying-glass-minus-light.icon";
import { MagnifyingGlassMinusRegularIcon } from "../regular/magnifying-glass-minus-regular.icon";
import { MagnifyingGlassMinusThinIcon } from "../thin/magnifying-glass-minus-thin.icon";

export const MagnifyingGlassMinusIcon = memo(function MagnifyingGlassMinus(
  props: IconWrapperProps,
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
