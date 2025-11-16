import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretCircleDoubleRightBold } from "../bold";
import { CaretCircleDoubleRightDuotone } from "../duotone";
import { CaretCircleDoubleRightFill } from "../fill";
import { CaretCircleDoubleRightLight } from "../light";
import { CaretCircleDoubleRightRegular } from "../regular";
import { CaretCircleDoubleRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretCircleDoubleRight = memo(function CaretCircleDoubleRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleDoubleRightBold,
      duotone: CaretCircleDoubleRightDuotone,
      fill: CaretCircleDoubleRightFill,
      light: CaretCircleDoubleRightLight,
      regular: CaretCircleDoubleRightRegular,
      thin: CaretCircleDoubleRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
