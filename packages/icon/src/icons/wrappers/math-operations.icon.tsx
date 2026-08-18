import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MathOperationsBoldIcon } from "../bold/math-operations-bold.icon";
import { MathOperationsDuotoneIcon } from "../duotone/math-operations-duotone.icon";
import { MathOperationsFillIcon } from "../fill/math-operations-fill.icon";
import { MathOperationsLightIcon } from "../light/math-operations-light.icon";
import { MathOperationsRegularIcon } from "../regular/math-operations-regular.icon";
import { MathOperationsThinIcon } from "../thin/math-operations-thin.icon";

export const MathOperationsIcon = memo(function MathOperations(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MathOperationsBoldIcon,
      duotone: MathOperationsDuotoneIcon,
      fill: MathOperationsFillIcon,
      light: MathOperationsLightIcon,
      regular: MathOperationsRegularIcon,
      thin: MathOperationsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
