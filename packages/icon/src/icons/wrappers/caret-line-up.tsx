import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretLineUpBold } from "../bold";
import { CaretLineUpDuotone } from "../duotone";
import { CaretLineUpFill } from "../fill";
import { CaretLineUpLight } from "../light";
import { CaretLineUpRegular } from "../regular";
import { CaretLineUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretLineUp = memo(function CaretLineUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretLineUpBold,
      duotone: CaretLineUpDuotone,
      fill: CaretLineUpFill,
      light: CaretLineUpLight,
      regular: CaretLineUpRegular,
      thin: CaretLineUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
