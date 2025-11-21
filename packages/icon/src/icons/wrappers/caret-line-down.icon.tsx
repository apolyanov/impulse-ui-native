import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretLineDownBoldIcon } from "../bold";
import { CaretLineDownDuotoneIcon } from "../duotone";
import { CaretLineDownFillIcon } from "../fill";
import { CaretLineDownLightIcon } from "../light";
import { CaretLineDownRegularIcon } from "../regular";
import { CaretLineDownThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretLineDownIcon = memo(function CaretLineDown(
  props: IconWrapperProps
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
