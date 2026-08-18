import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretCircleUpDownBoldIcon } from "../bold/caret-circle-up-down-bold.icon";
import { CaretCircleUpDownDuotoneIcon } from "../duotone/caret-circle-up-down-duotone.icon";
import { CaretCircleUpDownFillIcon } from "../fill/caret-circle-up-down-fill.icon";
import { CaretCircleUpDownLightIcon } from "../light/caret-circle-up-down-light.icon";
import { CaretCircleUpDownRegularIcon } from "../regular/caret-circle-up-down-regular.icon";
import { CaretCircleUpDownThinIcon } from "../thin/caret-circle-up-down-thin.icon";

export const CaretCircleUpDownIcon = memo(function CaretCircleUpDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleUpDownBoldIcon,
      duotone: CaretCircleUpDownDuotoneIcon,
      fill: CaretCircleUpDownFillIcon,
      light: CaretCircleUpDownLightIcon,
      regular: CaretCircleUpDownRegularIcon,
      thin: CaretCircleUpDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
