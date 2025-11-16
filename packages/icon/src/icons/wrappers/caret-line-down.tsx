import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretLineDownBold } from "../bold";
import { CaretLineDownDuotone } from "../duotone";
import { CaretLineDownFill } from "../fill";
import { CaretLineDownLight } from "../light";
import { CaretLineDownRegular } from "../regular";
import { CaretLineDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretLineDown = memo(function CaretLineDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretLineDownBold,
      duotone: CaretLineDownDuotone,
      fill: CaretLineDownFill,
      light: CaretLineDownLight,
      regular: CaretLineDownRegular,
      thin: CaretLineDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
