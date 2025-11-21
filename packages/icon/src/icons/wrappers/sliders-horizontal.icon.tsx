import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SlidersHorizontalBoldIcon } from "../bold";
import { SlidersHorizontalDuotoneIcon } from "../duotone";
import { SlidersHorizontalFillIcon } from "../fill";
import { SlidersHorizontalLightIcon } from "../light";
import { SlidersHorizontalRegularIcon } from "../regular";
import { SlidersHorizontalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SlidersHorizontalIcon = memo(function SlidersHorizontal(
  props: IconWrapperProps
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
