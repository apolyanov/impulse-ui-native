import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MathOperationsBold } from "../bold";
import { MathOperationsDuotone } from "../duotone";
import { MathOperationsFill } from "../fill";
import { MathOperationsLight } from "../light";
import { MathOperationsRegular } from "../regular";
import { MathOperationsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MathOperations = memo(function MathOperations(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MathOperationsBold,
      duotone: MathOperationsDuotone,
      fill: MathOperationsFill,
      light: MathOperationsLight,
      regular: MathOperationsRegular,
      thin: MathOperationsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
