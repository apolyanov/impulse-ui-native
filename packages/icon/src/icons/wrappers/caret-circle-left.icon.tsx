import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretCircleLeftBoldIcon } from "../bold/caret-circle-left-bold.icon";
import { CaretCircleLeftDuotoneIcon } from "../duotone/caret-circle-left-duotone.icon";
import { CaretCircleLeftFillIcon } from "../fill/caret-circle-left-fill.icon";
import { CaretCircleLeftLightIcon } from "../light/caret-circle-left-light.icon";
import { CaretCircleLeftRegularIcon } from "../regular/caret-circle-left-regular.icon";
import { CaretCircleLeftThinIcon } from "../thin/caret-circle-left-thin.icon";

export const CaretCircleLeftIcon = memo(function CaretCircleLeft(
  props: IconWrapperProps,
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
