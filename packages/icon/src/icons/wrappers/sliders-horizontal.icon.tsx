import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SlidersHorizontalBoldIcon } from "../bold/sliders-horizontal-bold.icon";
import { SlidersHorizontalDuotoneIcon } from "../duotone/sliders-horizontal-duotone.icon";
import { SlidersHorizontalFillIcon } from "../fill/sliders-horizontal-fill.icon";
import { SlidersHorizontalLightIcon } from "../light/sliders-horizontal-light.icon";
import { SlidersHorizontalRegularIcon } from "../regular/sliders-horizontal-regular.icon";
import { SlidersHorizontalThinIcon } from "../thin/sliders-horizontal-thin.icon";

export const SlidersHorizontalIcon = memo(function SlidersHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SlidersHorizontalBoldIcon,
      duotone: SlidersHorizontalDuotoneIcon,
      fill: SlidersHorizontalFillIcon,
      light: SlidersHorizontalLightIcon,
      regular: SlidersHorizontalRegularIcon,
      thin: SlidersHorizontalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
