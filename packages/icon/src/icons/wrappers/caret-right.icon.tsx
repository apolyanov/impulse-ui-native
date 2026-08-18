import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretRightBoldIcon } from "../bold/caret-right-bold.icon";
import { CaretRightDuotoneIcon } from "../duotone/caret-right-duotone.icon";
import { CaretRightFillIcon } from "../fill/caret-right-fill.icon";
import { CaretRightLightIcon } from "../light/caret-right-light.icon";
import { CaretRightRegularIcon } from "../regular/caret-right-regular.icon";
import { CaretRightThinIcon } from "../thin/caret-right-thin.icon";

export const CaretRightIcon = memo(function CaretRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretRightBoldIcon,
      duotone: CaretRightDuotoneIcon,
      fill: CaretRightFillIcon,
      light: CaretRightLightIcon,
      regular: CaretRightRegularIcon,
      thin: CaretRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
