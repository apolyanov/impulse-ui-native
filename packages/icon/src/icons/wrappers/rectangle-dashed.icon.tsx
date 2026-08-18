import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RectangleDashedBoldIcon } from "../bold/rectangle-dashed-bold.icon";
import { RectangleDashedDuotoneIcon } from "../duotone/rectangle-dashed-duotone.icon";
import { RectangleDashedFillIcon } from "../fill/rectangle-dashed-fill.icon";
import { RectangleDashedLightIcon } from "../light/rectangle-dashed-light.icon";
import { RectangleDashedRegularIcon } from "../regular/rectangle-dashed-regular.icon";
import { RectangleDashedThinIcon } from "../thin/rectangle-dashed-thin.icon";

export const RectangleDashedIcon = memo(function RectangleDashed(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RectangleDashedBoldIcon,
      duotone: RectangleDashedDuotoneIcon,
      fill: RectangleDashedFillIcon,
      light: RectangleDashedLightIcon,
      regular: RectangleDashedRegularIcon,
      thin: RectangleDashedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
