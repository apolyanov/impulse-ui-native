import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretLineDownBoldIcon } from "../bold/caret-line-down-bold.icon";
import { CaretLineDownDuotoneIcon } from "../duotone/caret-line-down-duotone.icon";
import { CaretLineDownFillIcon } from "../fill/caret-line-down-fill.icon";
import { CaretLineDownLightIcon } from "../light/caret-line-down-light.icon";
import { CaretLineDownRegularIcon } from "../regular/caret-line-down-regular.icon";
import { CaretLineDownThinIcon } from "../thin/caret-line-down-thin.icon";

export const CaretLineDownIcon = memo(function CaretLineDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretLineDownBoldIcon,
      duotone: CaretLineDownDuotoneIcon,
      fill: CaretLineDownFillIcon,
      light: CaretLineDownLightIcon,
      regular: CaretLineDownRegularIcon,
      thin: CaretLineDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
