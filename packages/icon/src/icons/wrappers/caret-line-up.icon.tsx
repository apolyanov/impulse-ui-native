import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretLineUpBoldIcon } from "../bold";
import { CaretLineUpDuotoneIcon } from "../duotone";
import { CaretLineUpFillIcon } from "../fill";
import { CaretLineUpLightIcon } from "../light";
import { CaretLineUpRegularIcon } from "../regular";
import { CaretLineUpThinIcon } from "../thin";

export const CaretLineUpIcon = memo(function CaretLineUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretLineUpBoldIcon,
      duotone: CaretLineUpDuotoneIcon,
      fill: CaretLineUpFillIcon,
      light: CaretLineUpLightIcon,
      regular: CaretLineUpRegularIcon,
      thin: CaretLineUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
