import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretCircleDownBold } from "../bold";
import { CaretCircleDownDuotone } from "../duotone";
import { CaretCircleDownFill } from "../fill";
import { CaretCircleDownLight } from "../light";
import { CaretCircleDownRegular } from "../regular";
import { CaretCircleDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretCircleDown = memo(function CaretCircleDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleDownBold,
      duotone: CaretCircleDownDuotone,
      fill: CaretCircleDownFill,
      light: CaretCircleDownLight,
      regular: CaretCircleDownRegular,
      thin: CaretCircleDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
