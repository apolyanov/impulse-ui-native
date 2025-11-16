import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretUpBold } from "../bold";
import { CaretUpDuotone } from "../duotone";
import { CaretUpFill } from "../fill";
import { CaretUpLight } from "../light";
import { CaretUpRegular } from "../regular";
import { CaretUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretUp = memo(function CaretUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretUpBold,
      duotone: CaretUpDuotone,
      fill: CaretUpFill,
      light: CaretUpLight,
      regular: CaretUpRegular,
      thin: CaretUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
