import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretUpDownBold } from "../bold";
import { CaretUpDownDuotone } from "../duotone";
import { CaretUpDownFill } from "../fill";
import { CaretUpDownLight } from "../light";
import { CaretUpDownRegular } from "../regular";
import { CaretUpDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretUpDown = memo(function CaretUpDown(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretUpDownBold,
      duotone: CaretUpDownDuotone,
      fill: CaretUpDownFill,
      light: CaretUpDownLight,
      regular: CaretUpDownRegular,
      thin: CaretUpDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
