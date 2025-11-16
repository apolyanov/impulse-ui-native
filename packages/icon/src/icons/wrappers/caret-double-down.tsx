import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretDoubleDownBold } from "../bold";
import { CaretDoubleDownDuotone } from "../duotone";
import { CaretDoubleDownFill } from "../fill";
import { CaretDoubleDownLight } from "../light";
import { CaretDoubleDownRegular } from "../regular";
import { CaretDoubleDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretDoubleDown = memo(function CaretDoubleDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretDoubleDownBold,
      duotone: CaretDoubleDownDuotone,
      fill: CaretDoubleDownFill,
      light: CaretDoubleDownLight,
      regular: CaretDoubleDownRegular,
      thin: CaretDoubleDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
