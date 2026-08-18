import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretCircleDoubleLeftBoldIcon } from "../bold/caret-circle-double-left-bold.icon";
import { CaretCircleDoubleLeftDuotoneIcon } from "../duotone/caret-circle-double-left-duotone.icon";
import { CaretCircleDoubleLeftFillIcon } from "../fill/caret-circle-double-left-fill.icon";
import { CaretCircleDoubleLeftLightIcon } from "../light/caret-circle-double-left-light.icon";
import { CaretCircleDoubleLeftRegularIcon } from "../regular/caret-circle-double-left-regular.icon";
import { CaretCircleDoubleLeftThinIcon } from "../thin/caret-circle-double-left-thin.icon";

export const CaretCircleDoubleLeftIcon = memo(function CaretCircleDoubleLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleDoubleLeftBoldIcon,
      duotone: CaretCircleDoubleLeftDuotoneIcon,
      fill: CaretCircleDoubleLeftFillIcon,
      light: CaretCircleDoubleLeftLightIcon,
      regular: CaretCircleDoubleLeftRegularIcon,
      thin: CaretCircleDoubleLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
