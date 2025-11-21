import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShuffleSimpleBoldIcon } from "../bold";
import { ShuffleSimpleDuotoneIcon } from "../duotone";
import { ShuffleSimpleFillIcon } from "../fill";
import { ShuffleSimpleLightIcon } from "../light";
import { ShuffleSimpleRegularIcon } from "../regular";
import { ShuffleSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShuffleSimpleIcon = memo(function ShuffleSimple(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShuffleSimpleBoldIcon,
      duotone: ShuffleSimpleDuotoneIcon,
      fill: ShuffleSimpleFillIcon,
      light: ShuffleSimpleLightIcon,
      regular: ShuffleSimpleRegularIcon,
      thin: ShuffleSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
