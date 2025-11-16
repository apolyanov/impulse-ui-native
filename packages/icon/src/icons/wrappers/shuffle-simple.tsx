import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShuffleSimpleBold } from "../bold";
import { ShuffleSimpleDuotone } from "../duotone";
import { ShuffleSimpleFill } from "../fill";
import { ShuffleSimpleLight } from "../light";
import { ShuffleSimpleRegular } from "../regular";
import { ShuffleSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShuffleSimple = memo(function ShuffleSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShuffleSimpleBold,
      duotone: ShuffleSimpleDuotone,
      fill: ShuffleSimpleFill,
      light: ShuffleSimpleLight,
      regular: ShuffleSimpleRegular,
      thin: ShuffleSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
