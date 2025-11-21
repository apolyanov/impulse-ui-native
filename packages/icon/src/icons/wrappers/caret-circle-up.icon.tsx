import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretCircleUpBoldIcon } from "../bold";
import { CaretCircleUpDuotoneIcon } from "../duotone";
import { CaretCircleUpFillIcon } from "../fill";
import { CaretCircleUpLightIcon } from "../light";
import { CaretCircleUpRegularIcon } from "../regular";
import { CaretCircleUpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretCircleUpIcon = memo(function CaretCircleUp(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretCircleUpBoldIcon,
      duotone: CaretCircleUpDuotoneIcon,
      fill: CaretCircleUpFillIcon,
      light: CaretCircleUpLightIcon,
      regular: CaretCircleUpRegularIcon,
      thin: CaretCircleUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
