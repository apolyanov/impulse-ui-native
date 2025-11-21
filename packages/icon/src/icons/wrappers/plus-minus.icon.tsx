import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlusMinusBoldIcon } from "../bold";
import { PlusMinusDuotoneIcon } from "../duotone";
import { PlusMinusFillIcon } from "../fill";
import { PlusMinusLightIcon } from "../light";
import { PlusMinusRegularIcon } from "../regular";
import { PlusMinusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PlusMinusIcon = memo(function PlusMinus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlusMinusBoldIcon,
      duotone: PlusMinusDuotoneIcon,
      fill: PlusMinusFillIcon,
      light: PlusMinusLightIcon,
      regular: PlusMinusRegularIcon,
      thin: PlusMinusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
