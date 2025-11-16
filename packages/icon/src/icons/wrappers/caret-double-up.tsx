import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretDoubleUpBold } from "../bold";
import { CaretDoubleUpDuotone } from "../duotone";
import { CaretDoubleUpFill } from "../fill";
import { CaretDoubleUpLight } from "../light";
import { CaretDoubleUpRegular } from "../regular";
import { CaretDoubleUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretDoubleUp = memo(function CaretDoubleUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretDoubleUpBold,
      duotone: CaretDoubleUpDuotone,
      fill: CaretDoubleUpFill,
      light: CaretDoubleUpLight,
      regular: CaretDoubleUpRegular,
      thin: CaretDoubleUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
