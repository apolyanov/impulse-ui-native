import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretCircleDoubleUpBoldIcon } from "../bold/caret-circle-double-up-bold.icon";
import { CaretCircleDoubleUpDuotoneIcon } from "../duotone/caret-circle-double-up-duotone.icon";
import { CaretCircleDoubleUpFillIcon } from "../fill/caret-circle-double-up-fill.icon";
import { CaretCircleDoubleUpLightIcon } from "../light/caret-circle-double-up-light.icon";
import { CaretCircleDoubleUpRegularIcon } from "../regular/caret-circle-double-up-regular.icon";
import { CaretCircleDoubleUpThinIcon } from "../thin/caret-circle-double-up-thin.icon";

export const CaretCircleDoubleUpIcon = memo(function CaretCircleDoubleUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleDoubleUpBoldIcon,
      duotone: CaretCircleDoubleUpDuotoneIcon,
      fill: CaretCircleDoubleUpFillIcon,
      light: CaretCircleDoubleUpLightIcon,
      regular: CaretCircleDoubleUpRegularIcon,
      thin: CaretCircleDoubleUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
