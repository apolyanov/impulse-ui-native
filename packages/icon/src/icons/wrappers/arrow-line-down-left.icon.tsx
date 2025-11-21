import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLineDownLeftBoldIcon } from "../bold";
import { ArrowLineDownLeftDuotoneIcon } from "../duotone";
import { ArrowLineDownLeftFillIcon } from "../fill";
import { ArrowLineDownLeftLightIcon } from "../light";
import { ArrowLineDownLeftRegularIcon } from "../regular";
import { ArrowLineDownLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLineDownLeftIcon = memo(function ArrowLineDownLeft(
  props: IconWrapperProps
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
