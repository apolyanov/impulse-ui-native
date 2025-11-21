import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretDoubleLeftBoldIcon } from "../bold";
import { CaretDoubleLeftDuotoneIcon } from "../duotone";
import { CaretDoubleLeftFillIcon } from "../fill";
import { CaretDoubleLeftLightIcon } from "../light";
import { CaretDoubleLeftRegularIcon } from "../regular";
import { CaretDoubleLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretDoubleLeftIcon = memo(function CaretDoubleLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretDoubleLeftBoldIcon,
      duotone: CaretDoubleLeftDuotoneIcon,
      fill: CaretDoubleLeftFillIcon,
      light: CaretDoubleLeftLightIcon,
      regular: CaretDoubleLeftRegularIcon,
      thin: CaretDoubleLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
