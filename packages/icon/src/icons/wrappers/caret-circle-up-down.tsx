import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretCircleUpDownBold } from "../bold";
import { CaretCircleUpDownDuotone } from "../duotone";
import { CaretCircleUpDownFill } from "../fill";
import { CaretCircleUpDownLight } from "../light";
import { CaretCircleUpDownRegular } from "../regular";
import { CaretCircleUpDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretCircleUpDown = memo(function CaretCircleUpDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleUpDownBold,
      duotone: CaretCircleUpDownDuotone,
      fill: CaretCircleUpDownFill,
      light: CaretCircleUpDownLight,
      regular: CaretCircleUpDownRegular,
      thin: CaretCircleUpDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
