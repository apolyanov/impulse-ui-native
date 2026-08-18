import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretLineUpBoldIcon } from "../bold/caret-line-up-bold.icon";
import { CaretLineUpDuotoneIcon } from "../duotone/caret-line-up-duotone.icon";
import { CaretLineUpFillIcon } from "../fill/caret-line-up-fill.icon";
import { CaretLineUpLightIcon } from "../light/caret-line-up-light.icon";
import { CaretLineUpRegularIcon } from "../regular/caret-line-up-regular.icon";
import { CaretLineUpThinIcon } from "../thin/caret-line-up-thin.icon";

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
