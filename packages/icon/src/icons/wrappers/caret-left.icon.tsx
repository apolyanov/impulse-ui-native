import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretLeftBoldIcon } from "../bold";
import { CaretLeftDuotoneIcon } from "../duotone";
import { CaretLeftFillIcon } from "../fill";
import { CaretLeftLightIcon } from "../light";
import { CaretLeftRegularIcon } from "../regular";
import { CaretLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretLeftIcon = memo(function CaretLeft(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretLeftBoldIcon,
      duotone: CaretLeftDuotoneIcon,
      fill: CaretLeftFillIcon,
      light: CaretLeftLightIcon,
      regular: CaretLeftRegularIcon,
      thin: CaretLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
