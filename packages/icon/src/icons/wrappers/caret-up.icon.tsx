import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretUpBoldIcon } from "../bold/caret-up-bold.icon";
import { CaretUpDuotoneIcon } from "../duotone/caret-up-duotone.icon";
import { CaretUpFillIcon } from "../fill/caret-up-fill.icon";
import { CaretUpLightIcon } from "../light/caret-up-light.icon";
import { CaretUpRegularIcon } from "../regular/caret-up-regular.icon";
import { CaretUpThinIcon } from "../thin/caret-up-thin.icon";

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
