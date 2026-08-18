import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MinusSquareBoldIcon } from "../bold/minus-square-bold.icon";
import { MinusSquareDuotoneIcon } from "../duotone/minus-square-duotone.icon";
import { MinusSquareFillIcon } from "../fill/minus-square-fill.icon";
import { MinusSquareLightIcon } from "../light/minus-square-light.icon";
import { MinusSquareRegularIcon } from "../regular/minus-square-regular.icon";
import { MinusSquareThinIcon } from "../thin/minus-square-thin.icon";

export const MinusSquareIcon = memo(function MinusSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MinusSquareBoldIcon,
      duotone: MinusSquareDuotoneIcon,
      fill: MinusSquareFillIcon,
      light: MinusSquareLightIcon,
      regular: MinusSquareRegularIcon,
      thin: MinusSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
