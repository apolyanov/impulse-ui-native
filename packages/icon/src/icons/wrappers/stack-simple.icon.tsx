import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StackSimpleBoldIcon } from "../bold/stack-simple-bold.icon";
import { StackSimpleDuotoneIcon } from "../duotone/stack-simple-duotone.icon";
import { StackSimpleFillIcon } from "../fill/stack-simple-fill.icon";
import { StackSimpleLightIcon } from "../light/stack-simple-light.icon";
import { StackSimpleRegularIcon } from "../regular/stack-simple-regular.icon";
import { StackSimpleThinIcon } from "../thin/stack-simple-thin.icon";

export const StackSimpleIcon = memo(function StackSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StackSimpleBoldIcon,
      duotone: StackSimpleDuotoneIcon,
      fill: StackSimpleFillIcon,
      light: StackSimpleLightIcon,
      regular: StackSimpleRegularIcon,
      thin: StackSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
