import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockSimpleBold } from "../bold";
import { LockSimpleDuotone } from "../duotone";
import { LockSimpleFill } from "../fill";
import { LockSimpleLight } from "../light";
import { LockSimpleRegular } from "../regular";
import { LockSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LockSimple = memo(function LockSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockSimpleBold,
      duotone: LockSimpleDuotone,
      fill: LockSimpleFill,
      light: LockSimpleLight,
      regular: LockSimpleRegular,
      thin: LockSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
