import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CalculatorBoldIcon } from "../bold/calculator-bold.icon";
import { CalculatorDuotoneIcon } from "../duotone/calculator-duotone.icon";
import { CalculatorFillIcon } from "../fill/calculator-fill.icon";
import { CalculatorLightIcon } from "../light/calculator-light.icon";
import { CalculatorRegularIcon } from "../regular/calculator-regular.icon";
import { CalculatorThinIcon } from "../thin/calculator-thin.icon";

export const CalculatorIcon = memo(function Calculator(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalculatorBoldIcon,
      duotone: CalculatorDuotoneIcon,
      fill: CalculatorFillIcon,
      light: CalculatorLightIcon,
      regular: CalculatorRegularIcon,
      thin: CalculatorThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
