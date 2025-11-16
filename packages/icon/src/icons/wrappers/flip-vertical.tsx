import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlipVerticalBold } from "../bold";
import { FlipVerticalDuotone } from "../duotone";
import { FlipVerticalFill } from "../fill";
import { FlipVerticalLight } from "../light";
import { FlipVerticalRegular } from "../regular";
import { FlipVerticalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlipVertical = memo(function FlipVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlipVerticalBold,
      duotone: FlipVerticalDuotone,
      fill: FlipVerticalFill,
      light: FlipVerticalLight,
      regular: FlipVerticalRegular,
      thin: FlipVerticalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
