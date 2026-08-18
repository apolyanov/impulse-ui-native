import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CheckSquareOffsetBoldIcon } from "../bold/check-square-offset-bold.icon";
import { CheckSquareOffsetDuotoneIcon } from "../duotone/check-square-offset-duotone.icon";
import { CheckSquareOffsetFillIcon } from "../fill/check-square-offset-fill.icon";
import { CheckSquareOffsetLightIcon } from "../light/check-square-offset-light.icon";
import { CheckSquareOffsetRegularIcon } from "../regular/check-square-offset-regular.icon";
import { CheckSquareOffsetThinIcon } from "../thin/check-square-offset-thin.icon";

export const CheckSquareOffsetIcon = memo(function CheckSquareOffset(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheckSquareOffsetBoldIcon,
      duotone: CheckSquareOffsetDuotoneIcon,
      fill: CheckSquareOffsetFillIcon,
      light: CheckSquareOffsetLightIcon,
      regular: CheckSquareOffsetRegularIcon,
      thin: CheckSquareOffsetThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
