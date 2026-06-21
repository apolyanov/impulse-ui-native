import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretCircleDoubleDownBoldIcon } from "../bold";
import { CaretCircleDoubleDownDuotoneIcon } from "../duotone";
import { CaretCircleDoubleDownFillIcon } from "../fill";
import { CaretCircleDoubleDownLightIcon } from "../light";
import { CaretCircleDoubleDownRegularIcon } from "../regular";
import { CaretCircleDoubleDownThinIcon } from "../thin";

export const CaretCircleDoubleDownIcon = memo(function CaretCircleDoubleDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleDoubleDownBoldIcon,
      duotone: CaretCircleDoubleDownDuotoneIcon,
      fill: CaretCircleDoubleDownFillIcon,
      light: CaretCircleDoubleDownLightIcon,
      regular: CaretCircleDoubleDownRegularIcon,
      thin: CaretCircleDoubleDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
