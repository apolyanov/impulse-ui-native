import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretRightBold } from "../bold";
import { CaretRightDuotone } from "../duotone";
import { CaretRightFill } from "../fill";
import { CaretRightLight } from "../light";
import { CaretRightRegular } from "../regular";
import { CaretRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretRight = memo(function CaretRight(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretRightBold,
      duotone: CaretRightDuotone,
      fill: CaretRightFill,
      light: CaretRightLight,
      regular: CaretRightRegular,
      thin: CaretRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
