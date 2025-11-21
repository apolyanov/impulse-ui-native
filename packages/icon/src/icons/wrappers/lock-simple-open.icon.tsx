import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockSimpleOpenBoldIcon } from "../bold";
import { LockSimpleOpenDuotoneIcon } from "../duotone";
import { LockSimpleOpenFillIcon } from "../fill";
import { LockSimpleOpenLightIcon } from "../light";
import { LockSimpleOpenRegularIcon } from "../regular";
import { LockSimpleOpenThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LockSimpleOpenIcon = memo(function LockSimpleOpen(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockSimpleOpenBoldIcon,
      duotone: LockSimpleOpenDuotoneIcon,
      fill: LockSimpleOpenFillIcon,
      light: LockSimpleOpenLightIcon,
      regular: LockSimpleOpenRegularIcon,
      thin: LockSimpleOpenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
