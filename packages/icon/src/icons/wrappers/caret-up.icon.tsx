import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretUpBoldIcon } from "../bold";
import { CaretUpDuotoneIcon } from "../duotone";
import { CaretUpFillIcon } from "../fill";
import { CaretUpLightIcon } from "../light";
import { CaretUpRegularIcon } from "../regular";
import { CaretUpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretUpIcon = memo(function CaretUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretUpBoldIcon,
      duotone: CaretUpDuotoneIcon,
      fill: CaretUpFillIcon,
      light: CaretUpLightIcon,
      regular: CaretUpRegularIcon,
      thin: CaretUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
