import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TriangleDashedBold } from "../bold";
import { TriangleDashedDuotone } from "../duotone";
import { TriangleDashedFill } from "../fill";
import { TriangleDashedLight } from "../light";
import { TriangleDashedRegular } from "../regular";
import { TriangleDashedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TriangleDashed = memo(function TriangleDashed(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TriangleDashedBold,
      duotone: TriangleDashedDuotone,
      fill: TriangleDashedFill,
      light: TriangleDashedLight,
      regular: TriangleDashedRegular,
      thin: TriangleDashedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
