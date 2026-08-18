import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StackBoldIcon } from "../bold/stack-bold.icon";
import { StackDuotoneIcon } from "../duotone/stack-duotone.icon";
import { StackFillIcon } from "../fill/stack-fill.icon";
import { StackLightIcon } from "../light/stack-light.icon";
import { StackRegularIcon } from "../regular/stack-regular.icon";
import { StackThinIcon } from "../thin/stack-thin.icon";

export const StackIcon = memo(function Stack(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StackBoldIcon,
      duotone: StackDuotoneIcon,
      fill: StackFillIcon,
      light: StackLightIcon,
      regular: StackRegularIcon,
      thin: StackThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
