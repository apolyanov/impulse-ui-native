import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SubtractSquareBoldIcon } from "../bold/subtract-square-bold.icon";
import { SubtractSquareDuotoneIcon } from "../duotone/subtract-square-duotone.icon";
import { SubtractSquareFillIcon } from "../fill/subtract-square-fill.icon";
import { SubtractSquareLightIcon } from "../light/subtract-square-light.icon";
import { SubtractSquareRegularIcon } from "../regular/subtract-square-regular.icon";
import { SubtractSquareThinIcon } from "../thin/subtract-square-thin.icon";

export const SubtractSquareIcon = memo(function SubtractSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubtractSquareBoldIcon,
      duotone: SubtractSquareDuotoneIcon,
      fill: SubtractSquareFillIcon,
      light: SubtractSquareLightIcon,
      regular: SubtractSquareRegularIcon,
      thin: SubtractSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
