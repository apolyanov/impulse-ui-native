import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaintBrushHouseholdBold } from "../bold";
import { PaintBrushHouseholdDuotone } from "../duotone";
import { PaintBrushHouseholdFill } from "../fill";
import { PaintBrushHouseholdLight } from "../light";
import { PaintBrushHouseholdRegular } from "../regular";
import { PaintBrushHouseholdThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaintBrushHousehold = memo(function PaintBrushHousehold(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaintBrushHouseholdBold,
      duotone: PaintBrushHouseholdDuotone,
      fill: PaintBrushHouseholdFill,
      light: PaintBrushHouseholdLight,
      regular: PaintBrushHouseholdRegular,
      thin: PaintBrushHouseholdThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
