import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CheckSquareBoldIcon } from "../bold/check-square-bold.icon";
import { CheckSquareDuotoneIcon } from "../duotone/check-square-duotone.icon";
import { CheckSquareFillIcon } from "../fill/check-square-fill.icon";
import { CheckSquareLightIcon } from "../light/check-square-light.icon";
import { CheckSquareRegularIcon } from "../regular/check-square-regular.icon";
import { CheckSquareThinIcon } from "../thin/check-square-thin.icon";

export const CheckSquareIcon = memo(function CheckSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheckSquareBoldIcon,
      duotone: CheckSquareDuotoneIcon,
      fill: CheckSquareFillIcon,
      light: CheckSquareLightIcon,
      regular: CheckSquareRegularIcon,
      thin: CheckSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
