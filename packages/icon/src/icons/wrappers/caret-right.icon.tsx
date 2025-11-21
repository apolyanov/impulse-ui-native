import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretRightBoldIcon } from "../bold";
import { CaretRightDuotoneIcon } from "../duotone";
import { CaretRightFillIcon } from "../fill";
import { CaretRightLightIcon } from "../light";
import { CaretRightRegularIcon } from "../regular";
import { CaretRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretRightIcon = memo(function CaretRight(
  props: IconWrapperProps
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
