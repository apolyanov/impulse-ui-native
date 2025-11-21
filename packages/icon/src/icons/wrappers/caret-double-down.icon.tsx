import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretDoubleDownBoldIcon } from "../bold";
import { CaretDoubleDownDuotoneIcon } from "../duotone";
import { CaretDoubleDownFillIcon } from "../fill";
import { CaretDoubleDownLightIcon } from "../light";
import { CaretDoubleDownRegularIcon } from "../regular";
import { CaretDoubleDownThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretDoubleDownIcon = memo(function CaretDoubleDown(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretDoubleDownBoldIcon,
      duotone: CaretDoubleDownDuotoneIcon,
      fill: CaretDoubleDownFillIcon,
      light: CaretDoubleDownLightIcon,
      regular: CaretDoubleDownRegularIcon,
      thin: CaretDoubleDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
