import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretCircleRightBoldIcon } from "../bold/caret-circle-right-bold.icon";
import { CaretCircleRightDuotoneIcon } from "../duotone/caret-circle-right-duotone.icon";
import { CaretCircleRightFillIcon } from "../fill/caret-circle-right-fill.icon";
import { CaretCircleRightLightIcon } from "../light/caret-circle-right-light.icon";
import { CaretCircleRightRegularIcon } from "../regular/caret-circle-right-regular.icon";
import { CaretCircleRightThinIcon } from "../thin/caret-circle-right-thin.icon";

export const CaretCircleRightIcon = memo(function CaretCircleRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleRightBoldIcon,
      duotone: CaretCircleRightDuotoneIcon,
      fill: CaretCircleRightFillIcon,
      light: CaretCircleRightLightIcon,
      regular: CaretCircleRightRegularIcon,
      thin: CaretCircleRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
