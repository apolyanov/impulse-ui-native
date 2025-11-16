import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretCircleDoubleUpBold } from "../bold";
import { CaretCircleDoubleUpDuotone } from "../duotone";
import { CaretCircleDoubleUpFill } from "../fill";
import { CaretCircleDoubleUpLight } from "../light";
import { CaretCircleDoubleUpRegular } from "../regular";
import { CaretCircleDoubleUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretCircleDoubleUp = memo(function CaretCircleDoubleUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleDoubleUpBold,
      duotone: CaretCircleDoubleUpDuotone,
      fill: CaretCircleDoubleUpFill,
      light: CaretCircleDoubleUpLight,
      regular: CaretCircleDoubleUpRegular,
      thin: CaretCircleDoubleUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
