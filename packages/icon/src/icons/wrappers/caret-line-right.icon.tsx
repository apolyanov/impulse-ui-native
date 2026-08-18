import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretLineRightBoldIcon } from "../bold/caret-line-right-bold.icon";
import { CaretLineRightDuotoneIcon } from "../duotone/caret-line-right-duotone.icon";
import { CaretLineRightFillIcon } from "../fill/caret-line-right-fill.icon";
import { CaretLineRightLightIcon } from "../light/caret-line-right-light.icon";
import { CaretLineRightRegularIcon } from "../regular/caret-line-right-regular.icon";
import { CaretLineRightThinIcon } from "../thin/caret-line-right-thin.icon";

export const CaretLineRightIcon = memo(function CaretLineRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretLineRightBoldIcon,
      duotone: CaretLineRightDuotoneIcon,
      fill: CaretLineRightFillIcon,
      light: CaretLineRightLightIcon,
      regular: CaretLineRightRegularIcon,
      thin: CaretLineRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
