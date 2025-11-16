import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretCircleDoubleDownBold } from "../bold";
import { CaretCircleDoubleDownDuotone } from "../duotone";
import { CaretCircleDoubleDownFill } from "../fill";
import { CaretCircleDoubleDownLight } from "../light";
import { CaretCircleDoubleDownRegular } from "../regular";
import { CaretCircleDoubleDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretCircleDoubleDown = memo(function CaretCircleDoubleDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleDoubleDownBold,
      duotone: CaretCircleDoubleDownDuotone,
      fill: CaretCircleDoubleDownFill,
      light: CaretCircleDoubleDownLight,
      regular: CaretCircleDoubleDownRegular,
      thin: CaretCircleDoubleDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
