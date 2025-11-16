import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretLineLeftBold } from "../bold";
import { CaretLineLeftDuotone } from "../duotone";
import { CaretLineLeftFill } from "../fill";
import { CaretLineLeftLight } from "../light";
import { CaretLineLeftRegular } from "../regular";
import { CaretLineLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretLineLeft = memo(function CaretLineLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretLineLeftBold,
      duotone: CaretLineLeftDuotone,
      fill: CaretLineLeftFill,
      light: CaretLineLeftLight,
      regular: CaretLineLeftRegular,
      thin: CaretLineLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
