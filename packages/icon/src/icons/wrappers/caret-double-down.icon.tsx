import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretDoubleDownBoldIcon } from "../bold/caret-double-down-bold.icon";
import { CaretDoubleDownDuotoneIcon } from "../duotone/caret-double-down-duotone.icon";
import { CaretDoubleDownFillIcon } from "../fill/caret-double-down-fill.icon";
import { CaretDoubleDownLightIcon } from "../light/caret-double-down-light.icon";
import { CaretDoubleDownRegularIcon } from "../regular/caret-double-down-regular.icon";
import { CaretDoubleDownThinIcon } from "../thin/caret-double-down-thin.icon";

export const CaretDoubleDownIcon = memo(function CaretDoubleDown(
  props: IconWrapperProps,
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
