import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretCircleUpBold } from "../bold";
import { CaretCircleUpDuotone } from "../duotone";
import { CaretCircleUpFill } from "../fill";
import { CaretCircleUpLight } from "../light";
import { CaretCircleUpRegular } from "../regular";
import { CaretCircleUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretCircleUp = memo(function CaretCircleUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleUpBold,
      duotone: CaretCircleUpDuotone,
      fill: CaretCircleUpFill,
      light: CaretCircleUpLight,
      regular: CaretCircleUpRegular,
      thin: CaretCircleUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
