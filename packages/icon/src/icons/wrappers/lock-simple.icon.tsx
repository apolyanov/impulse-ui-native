import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockSimpleBoldIcon } from "../bold";
import { LockSimpleDuotoneIcon } from "../duotone";
import { LockSimpleFillIcon } from "../fill";
import { LockSimpleLightIcon } from "../light";
import { LockSimpleRegularIcon } from "../regular";
import { LockSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LockSimpleIcon = memo(function LockSimple(
  props: IconWrapperProps
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
