import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockSimpleOpenBold } from "../bold";
import { LockSimpleOpenDuotone } from "../duotone";
import { LockSimpleOpenFill } from "../fill";
import { LockSimpleOpenLight } from "../light";
import { LockSimpleOpenRegular } from "../regular";
import { LockSimpleOpenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LockSimpleOpen = memo(function LockSimpleOpen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockSimpleOpenBold,
      duotone: LockSimpleOpenDuotone,
      fill: LockSimpleOpenFill,
      light: LockSimpleOpenLight,
      regular: LockSimpleOpenRegular,
      thin: LockSimpleOpenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
