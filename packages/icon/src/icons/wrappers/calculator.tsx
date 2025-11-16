import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CalculatorBold } from "../bold";
import { CalculatorDuotone } from "../duotone";
import { CalculatorFill } from "../fill";
import { CalculatorLight } from "../light";
import { CalculatorRegular } from "../regular";
import { CalculatorThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Calculator = memo(function Calculator(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CalculatorBold,
      duotone: CalculatorDuotone,
      fill: CalculatorFill,
      light: CalculatorLight,
      regular: CalculatorRegular,
      thin: CalculatorThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
