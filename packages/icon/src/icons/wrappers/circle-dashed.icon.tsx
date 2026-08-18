import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CircleDashedBoldIcon } from "../bold/circle-dashed-bold.icon";
import { CircleDashedDuotoneIcon } from "../duotone/circle-dashed-duotone.icon";
import { CircleDashedFillIcon } from "../fill/circle-dashed-fill.icon";
import { CircleDashedLightIcon } from "../light/circle-dashed-light.icon";
import { CircleDashedRegularIcon } from "../regular/circle-dashed-regular.icon";
import { CircleDashedThinIcon } from "../thin/circle-dashed-thin.icon";

export const CircleDashedIcon = memo(function CircleDashed(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CircleDashedBoldIcon,
      duotone: CircleDashedDuotoneIcon,
      fill: CircleDashedFillIcon,
      light: CircleDashedLightIcon,
      regular: CircleDashedRegularIcon,
      thin: CircleDashedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
