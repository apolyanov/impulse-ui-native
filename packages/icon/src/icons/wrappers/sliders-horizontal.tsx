import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SlidersHorizontalBold } from "../bold";
import { SlidersHorizontalDuotone } from "../duotone";
import { SlidersHorizontalFill } from "../fill";
import { SlidersHorizontalLight } from "../light";
import { SlidersHorizontalRegular } from "../regular";
import { SlidersHorizontalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SlidersHorizontal = memo(function SlidersHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SlidersHorizontalBold,
      duotone: SlidersHorizontalDuotone,
      fill: SlidersHorizontalFill,
      light: SlidersHorizontalLight,
      regular: SlidersHorizontalRegular,
      thin: SlidersHorizontalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
