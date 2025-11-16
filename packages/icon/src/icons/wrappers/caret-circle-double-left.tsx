import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretCircleDoubleLeftBold } from "../bold";
import { CaretCircleDoubleLeftDuotone } from "../duotone";
import { CaretCircleDoubleLeftFill } from "../fill";
import { CaretCircleDoubleLeftLight } from "../light";
import { CaretCircleDoubleLeftRegular } from "../regular";
import { CaretCircleDoubleLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretCircleDoubleLeft = memo(function CaretCircleDoubleLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleDoubleLeftBold,
      duotone: CaretCircleDoubleLeftDuotone,
      fill: CaretCircleDoubleLeftFill,
      light: CaretCircleDoubleLeftLight,
      regular: CaretCircleDoubleLeftRegular,
      thin: CaretCircleDoubleLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
