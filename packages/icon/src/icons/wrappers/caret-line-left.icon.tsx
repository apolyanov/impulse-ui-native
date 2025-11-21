import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretLineLeftBoldIcon } from "../bold";
import { CaretLineLeftDuotoneIcon } from "../duotone";
import { CaretLineLeftFillIcon } from "../fill";
import { CaretLineLeftLightIcon } from "../light";
import { CaretLineLeftRegularIcon } from "../regular";
import { CaretLineLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretLineLeftIcon = memo(function CaretLineLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretLineLeftBoldIcon,
      duotone: CaretLineLeftDuotoneIcon,
      fill: CaretLineLeftFillIcon,
      light: CaretLineLeftLightIcon,
      regular: CaretLineLeftRegularIcon,
      thin: CaretLineLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
