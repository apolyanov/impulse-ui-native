import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlusMinusBoldIcon } from "../bold/plus-minus-bold.icon";
import { PlusMinusDuotoneIcon } from "../duotone/plus-minus-duotone.icon";
import { PlusMinusFillIcon } from "../fill/plus-minus-fill.icon";
import { PlusMinusLightIcon } from "../light/plus-minus-light.icon";
import { PlusMinusRegularIcon } from "../regular/plus-minus-regular.icon";
import { PlusMinusThinIcon } from "../thin/plus-minus-thin.icon";

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
