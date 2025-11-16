import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretCircleRightBold } from "../bold";
import { CaretCircleRightDuotone } from "../duotone";
import { CaretCircleRightFill } from "../fill";
import { CaretCircleRightLight } from "../light";
import { CaretCircleRightRegular } from "../regular";
import { CaretCircleRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretCircleRight = memo(function CaretCircleRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleRightBold,
      duotone: CaretCircleRightDuotone,
      fill: CaretCircleRightFill,
      light: CaretCircleRightLight,
      regular: CaretCircleRightRegular,
      thin: CaretCircleRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
