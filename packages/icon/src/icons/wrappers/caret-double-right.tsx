import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretDoubleRightBold } from "../bold";
import { CaretDoubleRightDuotone } from "../duotone";
import { CaretDoubleRightFill } from "../fill";
import { CaretDoubleRightLight } from "../light";
import { CaretDoubleRightRegular } from "../regular";
import { CaretDoubleRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretDoubleRight = memo(function CaretDoubleRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretDoubleRightBold,
      duotone: CaretDoubleRightDuotone,
      fill: CaretDoubleRightFill,
      light: CaretDoubleRightLight,
      regular: CaretDoubleRightRegular,
      thin: CaretDoubleRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
