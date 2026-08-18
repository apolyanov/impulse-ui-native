import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowLineDownLeftBoldIcon } from "../bold/arrow-line-down-left-bold.icon";
import { ArrowLineDownLeftDuotoneIcon } from "../duotone/arrow-line-down-left-duotone.icon";
import { ArrowLineDownLeftFillIcon } from "../fill/arrow-line-down-left-fill.icon";
import { ArrowLineDownLeftLightIcon } from "../light/arrow-line-down-left-light.icon";
import { ArrowLineDownLeftRegularIcon } from "../regular/arrow-line-down-left-regular.icon";
import { ArrowLineDownLeftThinIcon } from "../thin/arrow-line-down-left-thin.icon";

export const ArrowLineDownLeftIcon = memo(function ArrowLineDownLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineDownLeftBoldIcon,
      duotone: ArrowLineDownLeftDuotoneIcon,
      fill: ArrowLineDownLeftFillIcon,
      light: ArrowLineDownLeftLightIcon,
      regular: ArrowLineDownLeftRegularIcon,
      thin: ArrowLineDownLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
