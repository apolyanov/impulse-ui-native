import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TriangleDashedBoldIcon } from "../bold/triangle-dashed-bold.icon";
import { TriangleDashedDuotoneIcon } from "../duotone/triangle-dashed-duotone.icon";
import { TriangleDashedFillIcon } from "../fill/triangle-dashed-fill.icon";
import { TriangleDashedLightIcon } from "../light/triangle-dashed-light.icon";
import { TriangleDashedRegularIcon } from "../regular/triangle-dashed-regular.icon";
import { TriangleDashedThinIcon } from "../thin/triangle-dashed-thin.icon";

export const TriangleDashedIcon = memo(function TriangleDashed(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TriangleDashedBoldIcon,
      duotone: TriangleDashedDuotoneIcon,
      fill: TriangleDashedFillIcon,
      light: TriangleDashedLightIcon,
      regular: TriangleDashedRegularIcon,
      thin: TriangleDashedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
