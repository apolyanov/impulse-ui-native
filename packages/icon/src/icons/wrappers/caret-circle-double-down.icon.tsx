import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretCircleDoubleDownBoldIcon } from "../bold/caret-circle-double-down-bold.icon";
import { CaretCircleDoubleDownDuotoneIcon } from "../duotone/caret-circle-double-down-duotone.icon";
import { CaretCircleDoubleDownFillIcon } from "../fill/caret-circle-double-down-fill.icon";
import { CaretCircleDoubleDownLightIcon } from "../light/caret-circle-double-down-light.icon";
import { CaretCircleDoubleDownRegularIcon } from "../regular/caret-circle-double-down-regular.icon";
import { CaretCircleDoubleDownThinIcon } from "../thin/caret-circle-double-down-thin.icon";

export const CaretCircleDoubleDownIcon = memo(function CaretCircleDoubleDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleDoubleDownBoldIcon,
      duotone: CaretCircleDoubleDownDuotoneIcon,
      fill: CaretCircleDoubleDownFillIcon,
      light: CaretCircleDoubleDownLightIcon,
      regular: CaretCircleDoubleDownRegularIcon,
      thin: CaretCircleDoubleDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
