import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretCircleDoubleUpBoldIcon } from "../bold";
import { CaretCircleDoubleUpDuotoneIcon } from "../duotone";
import { CaretCircleDoubleUpFillIcon } from "../fill";
import { CaretCircleDoubleUpLightIcon } from "../light";
import { CaretCircleDoubleUpRegularIcon } from "../regular";
import { CaretCircleDoubleUpThinIcon } from "../thin";

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
