import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StackPlusBoldIcon } from "../bold";
import { StackPlusDuotoneIcon } from "../duotone";
import { StackPlusFillIcon } from "../fill";
import { StackPlusLightIcon } from "../light";
import { StackPlusRegularIcon } from "../regular";
import { StackPlusThinIcon } from "../thin";

export const StackPlusIcon = memo(function StackPlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StackPlusBoldIcon,
      duotone: StackPlusDuotoneIcon,
      fill: StackPlusFillIcon,
      light: StackPlusLightIcon,
      regular: StackPlusRegularIcon,
      thin: StackPlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
