import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StackPlusBoldIcon } from "../bold/stack-plus-bold.icon";
import { StackPlusDuotoneIcon } from "../duotone/stack-plus-duotone.icon";
import { StackPlusFillIcon } from "../fill/stack-plus-fill.icon";
import { StackPlusLightIcon } from "../light/stack-plus-light.icon";
import { StackPlusRegularIcon } from "../regular/stack-plus-regular.icon";
import { StackPlusThinIcon } from "../thin/stack-plus-thin.icon";

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
