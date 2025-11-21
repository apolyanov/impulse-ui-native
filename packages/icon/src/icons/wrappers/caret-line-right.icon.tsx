import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretLineRightBoldIcon } from "../bold";
import { CaretLineRightDuotoneIcon } from "../duotone";
import { CaretLineRightFillIcon } from "../fill";
import { CaretLineRightLightIcon } from "../light";
import { CaretLineRightRegularIcon } from "../regular";
import { CaretLineRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretLineRightIcon = memo(function CaretLineRight(
  props: IconWrapperProps
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
