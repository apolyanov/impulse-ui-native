import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretCircleDoubleRightBoldIcon } from "../bold/caret-circle-double-right-bold.icon";
import { CaretCircleDoubleRightDuotoneIcon } from "../duotone/caret-circle-double-right-duotone.icon";
import { CaretCircleDoubleRightFillIcon } from "../fill/caret-circle-double-right-fill.icon";
import { CaretCircleDoubleRightLightIcon } from "../light/caret-circle-double-right-light.icon";
import { CaretCircleDoubleRightRegularIcon } from "../regular/caret-circle-double-right-regular.icon";
import { CaretCircleDoubleRightThinIcon } from "../thin/caret-circle-double-right-thin.icon";

export const CaretCircleDoubleRightIcon = memo(function CaretCircleDoubleRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleDoubleRightBoldIcon,
      duotone: CaretCircleDoubleRightDuotoneIcon,
      fill: CaretCircleDoubleRightFillIcon,
      light: CaretCircleDoubleRightLightIcon,
      regular: CaretCircleDoubleRightRegularIcon,
      thin: CaretCircleDoubleRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
