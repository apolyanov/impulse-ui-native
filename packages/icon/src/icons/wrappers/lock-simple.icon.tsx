import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LockSimpleBoldIcon } from "../bold/lock-simple-bold.icon";
import { LockSimpleDuotoneIcon } from "../duotone/lock-simple-duotone.icon";
import { LockSimpleFillIcon } from "../fill/lock-simple-fill.icon";
import { LockSimpleLightIcon } from "../light/lock-simple-light.icon";
import { LockSimpleRegularIcon } from "../regular/lock-simple-regular.icon";
import { LockSimpleThinIcon } from "../thin/lock-simple-thin.icon";

export const LockSimpleIcon = memo(function LockSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockSimpleBoldIcon,
      duotone: LockSimpleDuotoneIcon,
      fill: LockSimpleFillIcon,
      light: LockSimpleLightIcon,
      regular: LockSimpleRegularIcon,
      thin: LockSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
