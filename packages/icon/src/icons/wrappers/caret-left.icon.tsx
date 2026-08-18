import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretLeftBoldIcon } from "../bold/caret-left-bold.icon";
import { CaretLeftDuotoneIcon } from "../duotone/caret-left-duotone.icon";
import { CaretLeftFillIcon } from "../fill/caret-left-fill.icon";
import { CaretLeftLightIcon } from "../light/caret-left-light.icon";
import { CaretLeftRegularIcon } from "../regular/caret-left-regular.icon";
import { CaretLeftThinIcon } from "../thin/caret-left-thin.icon";

export const CaretLeftIcon = memo(function CaretLeft(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretLeftBoldIcon,
      duotone: CaretLeftDuotoneIcon,
      fill: CaretLeftFillIcon,
      light: CaretLeftLightIcon,
      regular: CaretLeftRegularIcon,
      thin: CaretLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
