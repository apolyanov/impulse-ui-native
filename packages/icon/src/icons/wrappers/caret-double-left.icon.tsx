import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretDoubleLeftBoldIcon } from "../bold/caret-double-left-bold.icon";
import { CaretDoubleLeftDuotoneIcon } from "../duotone/caret-double-left-duotone.icon";
import { CaretDoubleLeftFillIcon } from "../fill/caret-double-left-fill.icon";
import { CaretDoubleLeftLightIcon } from "../light/caret-double-left-light.icon";
import { CaretDoubleLeftRegularIcon } from "../regular/caret-double-left-regular.icon";
import { CaretDoubleLeftThinIcon } from "../thin/caret-double-left-thin.icon";

export const CaretDoubleLeftIcon = memo(function CaretDoubleLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretDoubleLeftBoldIcon,
      duotone: CaretDoubleLeftDuotoneIcon,
      fill: CaretDoubleLeftFillIcon,
      light: CaretDoubleLeftLightIcon,
      regular: CaretDoubleLeftRegularIcon,
      thin: CaretDoubleLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
