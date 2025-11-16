import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretDoubleLeftBold } from "../bold";
import { CaretDoubleLeftDuotone } from "../duotone";
import { CaretDoubleLeftFill } from "../fill";
import { CaretDoubleLeftLight } from "../light";
import { CaretDoubleLeftRegular } from "../regular";
import { CaretDoubleLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretDoubleLeft = memo(function CaretDoubleLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretDoubleLeftBold,
      duotone: CaretDoubleLeftDuotone,
      fill: CaretDoubleLeftFill,
      light: CaretDoubleLeftLight,
      regular: CaretDoubleLeftRegular,
      thin: CaretDoubleLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
