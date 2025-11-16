import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SplitVerticalBold } from "../bold";
import { SplitVerticalDuotone } from "../duotone";
import { SplitVerticalFill } from "../fill";
import { SplitVerticalLight } from "../light";
import { SplitVerticalRegular } from "../regular";
import { SplitVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SplitVertical = memo(function SplitVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SplitVerticalBold,
      duotone: SplitVerticalDuotone,
      fill: SplitVerticalFill,
      light: SplitVerticalLight,
      regular: SplitVerticalRegular,
      thin: SplitVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
