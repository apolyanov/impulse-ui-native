import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StackBoldIcon } from "../bold";
import { StackDuotoneIcon } from "../duotone";
import { StackFillIcon } from "../fill";
import { StackLightIcon } from "../light";
import { StackRegularIcon } from "../regular";
import { StackThinIcon } from "../thin";

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
