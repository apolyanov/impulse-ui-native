import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretCircleLeftBold } from "../bold";
import { CaretCircleLeftDuotone } from "../duotone";
import { CaretCircleLeftFill } from "../fill";
import { CaretCircleLeftLight } from "../light";
import { CaretCircleLeftRegular } from "../regular";
import { CaretCircleLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretCircleLeft = memo(function CaretCircleLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleLeftBold,
      duotone: CaretCircleLeftDuotone,
      fill: CaretCircleLeftFill,
      light: CaretCircleLeftLight,
      regular: CaretCircleLeftRegular,
      thin: CaretCircleLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
