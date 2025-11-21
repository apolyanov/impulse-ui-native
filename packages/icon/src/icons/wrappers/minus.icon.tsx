import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MinusBoldIcon } from "../bold";
import { MinusDuotoneIcon } from "../duotone";
import { MinusFillIcon } from "../fill";
import { MinusLightIcon } from "../light";
import { MinusRegularIcon } from "../regular";
import { MinusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
