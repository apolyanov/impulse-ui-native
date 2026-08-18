import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretLineLeftBoldIcon } from "../bold/caret-line-left-bold.icon";
import { CaretLineLeftDuotoneIcon } from "../duotone/caret-line-left-duotone.icon";
import { CaretLineLeftFillIcon } from "../fill/caret-line-left-fill.icon";
import { CaretLineLeftLightIcon } from "../light/caret-line-left-light.icon";
import { CaretLineLeftRegularIcon } from "../regular/caret-line-left-regular.icon";
import { CaretLineLeftThinIcon } from "../thin/caret-line-left-thin.icon";

export const CaretLineLeftIcon = memo(function CaretLineLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretLineLeftBoldIcon,
      duotone: CaretLineLeftDuotoneIcon,
      fill: CaretLineLeftFillIcon,
      light: CaretLineLeftLightIcon,
      regular: CaretLineLeftRegularIcon,
      thin: CaretLineLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
