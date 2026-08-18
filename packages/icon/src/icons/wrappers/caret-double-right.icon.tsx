import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretDoubleRightBoldIcon } from "../bold/caret-double-right-bold.icon";
import { CaretDoubleRightDuotoneIcon } from "../duotone/caret-double-right-duotone.icon";
import { CaretDoubleRightFillIcon } from "../fill/caret-double-right-fill.icon";
import { CaretDoubleRightLightIcon } from "../light/caret-double-right-light.icon";
import { CaretDoubleRightRegularIcon } from "../regular/caret-double-right-regular.icon";
import { CaretDoubleRightThinIcon } from "../thin/caret-double-right-thin.icon";

export const CaretDoubleRightIcon = memo(function CaretDoubleRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretDoubleRightBoldIcon,
      duotone: CaretDoubleRightDuotoneIcon,
      fill: CaretDoubleRightFillIcon,
      light: CaretDoubleRightLightIcon,
      regular: CaretDoubleRightRegularIcon,
      thin: CaretDoubleRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
