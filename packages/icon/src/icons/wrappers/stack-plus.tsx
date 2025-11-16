import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StackPlusBold } from "../bold";
import { StackPlusDuotone } from "../duotone";
import { StackPlusFill } from "../fill";
import { StackPlusLight } from "../light";
import { StackPlusRegular } from "../regular";
import { StackPlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StackPlus = memo(function StackPlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StackPlusBold,
      duotone: StackPlusDuotone,
      fill: StackPlusFill,
      light: StackPlusLight,
      regular: StackPlusRegular,
      thin: StackPlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
