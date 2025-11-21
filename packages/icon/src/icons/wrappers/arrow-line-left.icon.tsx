import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLineLeftBoldIcon } from "../bold";
import { ArrowLineLeftDuotoneIcon } from "../duotone";
import { ArrowLineLeftFillIcon } from "../fill";
import { ArrowLineLeftLightIcon } from "../light";
import { ArrowLineLeftRegularIcon } from "../regular";
import { ArrowLineLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLineLeftIcon = memo(function ArrowLineLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineLeftBoldIcon,
      duotone: ArrowLineLeftDuotoneIcon,
      fill: ArrowLineLeftFillIcon,
      light: ArrowLineLeftLightIcon,
      regular: ArrowLineLeftRegularIcon,
      thin: ArrowLineLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
