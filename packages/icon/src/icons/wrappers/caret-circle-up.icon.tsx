import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretCircleUpBoldIcon } from "../bold/caret-circle-up-bold.icon";
import { CaretCircleUpDuotoneIcon } from "../duotone/caret-circle-up-duotone.icon";
import { CaretCircleUpFillIcon } from "../fill/caret-circle-up-fill.icon";
import { CaretCircleUpLightIcon } from "../light/caret-circle-up-light.icon";
import { CaretCircleUpRegularIcon } from "../regular/caret-circle-up-regular.icon";
import { CaretCircleUpThinIcon } from "../thin/caret-circle-up-thin.icon";

export const CaretCircleUpIcon = memo(function CaretCircleUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleUpBoldIcon,
      duotone: CaretCircleUpDuotoneIcon,
      fill: CaretCircleUpFillIcon,
      light: CaretCircleUpLightIcon,
      regular: CaretCircleUpRegularIcon,
      thin: CaretCircleUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
