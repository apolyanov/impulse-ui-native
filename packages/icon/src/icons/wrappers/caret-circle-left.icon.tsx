import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretCircleLeftBoldIcon } from "../bold";
import { CaretCircleLeftDuotoneIcon } from "../duotone";
import { CaretCircleLeftFillIcon } from "../fill";
import { CaretCircleLeftLightIcon } from "../light";
import { CaretCircleLeftRegularIcon } from "../regular";
import { CaretCircleLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretCircleLeftIcon = memo(function CaretCircleLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleLeftBoldIcon,
      duotone: CaretCircleLeftDuotoneIcon,
      fill: CaretCircleLeftFillIcon,
      light: CaretCircleLeftLightIcon,
      regular: CaretCircleLeftRegularIcon,
      thin: CaretCircleLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
