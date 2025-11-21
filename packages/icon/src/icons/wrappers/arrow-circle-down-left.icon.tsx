import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowCircleDownLeftBoldIcon } from "../bold";
import { ArrowCircleDownLeftDuotoneIcon } from "../duotone";
import { ArrowCircleDownLeftFillIcon } from "../fill";
import { ArrowCircleDownLeftLightIcon } from "../light";
import { ArrowCircleDownLeftRegularIcon } from "../regular";
import { ArrowCircleDownLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowCircleDownLeftIcon = memo(function ArrowCircleDownLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleDownLeftBoldIcon,
      duotone: ArrowCircleDownLeftDuotoneIcon,
      fill: ArrowCircleDownLeftFillIcon,
      light: ArrowCircleDownLeftLightIcon,
      regular: ArrowCircleDownLeftRegularIcon,
      thin: ArrowCircleDownLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
