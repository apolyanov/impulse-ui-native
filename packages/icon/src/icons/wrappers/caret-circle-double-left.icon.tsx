import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretCircleDoubleLeftBoldIcon } from "../bold";
import { CaretCircleDoubleLeftDuotoneIcon } from "../duotone";
import { CaretCircleDoubleLeftFillIcon } from "../fill";
import { CaretCircleDoubleLeftLightIcon } from "../light";
import { CaretCircleDoubleLeftRegularIcon } from "../regular";
import { CaretCircleDoubleLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretCircleDoubleLeftIcon = memo(function CaretCircleDoubleLeft(
  props: IconWrapperProps
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
