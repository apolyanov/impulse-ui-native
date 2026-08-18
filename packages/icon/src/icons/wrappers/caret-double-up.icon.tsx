import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretDoubleUpBoldIcon } from "../bold/caret-double-up-bold.icon";
import { CaretDoubleUpDuotoneIcon } from "../duotone/caret-double-up-duotone.icon";
import { CaretDoubleUpFillIcon } from "../fill/caret-double-up-fill.icon";
import { CaretDoubleUpLightIcon } from "../light/caret-double-up-light.icon";
import { CaretDoubleUpRegularIcon } from "../regular/caret-double-up-regular.icon";
import { CaretDoubleUpThinIcon } from "../thin/caret-double-up-thin.icon";

export const CaretDoubleUpIcon = memo(function CaretDoubleUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretDoubleUpBoldIcon,
      duotone: CaretDoubleUpDuotoneIcon,
      fill: CaretDoubleUpFillIcon,
      light: CaretDoubleUpLightIcon,
      regular: CaretDoubleUpRegularIcon,
      thin: CaretDoubleUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
