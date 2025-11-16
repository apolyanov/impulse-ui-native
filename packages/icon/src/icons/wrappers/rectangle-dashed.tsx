import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RectangleDashedBold } from "../bold";
import { RectangleDashedDuotone } from "../duotone";
import { RectangleDashedFill } from "../fill";
import { RectangleDashedLight } from "../light";
import { RectangleDashedRegular } from "../regular";
import { RectangleDashedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RectangleDashed = memo(function RectangleDashed(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RectangleDashedBold,
      duotone: RectangleDashedDuotone,
      fill: RectangleDashedFill,
      light: RectangleDashedLight,
      regular: RectangleDashedRegular,
      thin: RectangleDashedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
