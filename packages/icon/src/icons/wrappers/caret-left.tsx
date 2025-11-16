import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretLeftBold } from "../bold";
import { CaretLeftDuotone } from "../duotone";
import { CaretLeftFill } from "../fill";
import { CaretLeftLight } from "../light";
import { CaretLeftRegular } from "../regular";
import { CaretLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretLeft = memo(function CaretLeft(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretLeftBold,
      duotone: CaretLeftDuotone,
      fill: CaretLeftFill,
      light: CaretLeftLight,
      regular: CaretLeftRegular,
      thin: CaretLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
