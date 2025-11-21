import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretCircleRightBoldIcon } from "../bold";
import { CaretCircleRightDuotoneIcon } from "../duotone";
import { CaretCircleRightFillIcon } from "../fill";
import { CaretCircleRightLightIcon } from "../light";
import { CaretCircleRightRegularIcon } from "../regular";
import { CaretCircleRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretCircleRightIcon = memo(function CaretCircleRight(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleRightBoldIcon,
      duotone: CaretCircleRightDuotoneIcon,
      fill: CaretCircleRightFillIcon,
      light: CaretCircleRightLightIcon,
      regular: CaretCircleRightRegularIcon,
      thin: CaretCircleRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
