import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretLineRightBold } from "../bold";
import { CaretLineRightDuotone } from "../duotone";
import { CaretLineRightFill } from "../fill";
import { CaretLineRightLight } from "../light";
import { CaretLineRightRegular } from "../regular";
import { CaretLineRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretLineRight = memo(function CaretLineRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretLineRightBold,
      duotone: CaretLineRightDuotone,
      fill: CaretLineRightFill,
      light: CaretLineRightLight,
      regular: CaretLineRightRegular,
      thin: CaretLineRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
