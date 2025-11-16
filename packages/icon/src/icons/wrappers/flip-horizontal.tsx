import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlipHorizontalBold } from "../bold";
import { FlipHorizontalDuotone } from "../duotone";
import { FlipHorizontalFill } from "../fill";
import { FlipHorizontalLight } from "../light";
import { FlipHorizontalRegular } from "../regular";
import { FlipHorizontalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlipHorizontal = memo(function FlipHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlipHorizontalBold,
      duotone: FlipHorizontalDuotone,
      fill: FlipHorizontalFill,
      light: FlipHorizontalLight,
      regular: FlipHorizontalRegular,
      thin: FlipHorizontalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
