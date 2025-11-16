import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SplitHorizontalBold } from "../bold";
import { SplitHorizontalDuotone } from "../duotone";
import { SplitHorizontalFill } from "../fill";
import { SplitHorizontalLight } from "../light";
import { SplitHorizontalRegular } from "../regular";
import { SplitHorizontalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SplitHorizontal = memo(function SplitHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SplitHorizontalBold,
      duotone: SplitHorizontalDuotone,
      fill: SplitHorizontalFill,
      light: SplitHorizontalLight,
      regular: SplitHorizontalRegular,
      thin: SplitHorizontalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
