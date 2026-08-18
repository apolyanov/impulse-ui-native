import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShuffleSimpleBoldIcon } from "../bold/shuffle-simple-bold.icon";
import { ShuffleSimpleDuotoneIcon } from "../duotone/shuffle-simple-duotone.icon";
import { ShuffleSimpleFillIcon } from "../fill/shuffle-simple-fill.icon";
import { ShuffleSimpleLightIcon } from "../light/shuffle-simple-light.icon";
import { ShuffleSimpleRegularIcon } from "../regular/shuffle-simple-regular.icon";
import { ShuffleSimpleThinIcon } from "../thin/shuffle-simple-thin.icon";

export const ShuffleSimpleIcon = memo(function ShuffleSimple(
  props: IconWrapperProps,
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
