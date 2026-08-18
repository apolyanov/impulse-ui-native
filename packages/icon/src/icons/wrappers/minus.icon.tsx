import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MinusBoldIcon } from "../bold/minus-bold.icon";
import { MinusDuotoneIcon } from "../duotone/minus-duotone.icon";
import { MinusFillIcon } from "../fill/minus-fill.icon";
import { MinusLightIcon } from "../light/minus-light.icon";
import { MinusRegularIcon } from "../regular/minus-regular.icon";
import { MinusThinIcon } from "../thin/minus-thin.icon";

export const MinusIcon = memo(function Minus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MinusBoldIcon,
      duotone: MinusDuotoneIcon,
      fill: MinusFillIcon,
      light: MinusLightIcon,
      regular: MinusRegularIcon,
      thin: MinusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
