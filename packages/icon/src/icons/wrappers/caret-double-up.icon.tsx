import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretDoubleUpBoldIcon } from "../bold";
import { CaretDoubleUpDuotoneIcon } from "../duotone";
import { CaretDoubleUpFillIcon } from "../fill";
import { CaretDoubleUpLightIcon } from "../light";
import { CaretDoubleUpRegularIcon } from "../regular";
import { CaretDoubleUpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretDoubleUpIcon = memo(function CaretDoubleUp(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretDoubleUpBoldIcon,
      duotone: CaretDoubleUpDuotoneIcon,
      fill: CaretDoubleUpFillIcon,
      light: CaretDoubleUpLightIcon,
      regular: CaretDoubleUpRegularIcon,
      thin: CaretDoubleUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
