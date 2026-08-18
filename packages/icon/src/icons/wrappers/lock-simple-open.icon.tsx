import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LockSimpleOpenBoldIcon } from "../bold/lock-simple-open-bold.icon";
import { LockSimpleOpenDuotoneIcon } from "../duotone/lock-simple-open-duotone.icon";
import { LockSimpleOpenFillIcon } from "../fill/lock-simple-open-fill.icon";
import { LockSimpleOpenLightIcon } from "../light/lock-simple-open-light.icon";
import { LockSimpleOpenRegularIcon } from "../regular/lock-simple-open-regular.icon";
import { LockSimpleOpenThinIcon } from "../thin/lock-simple-open-thin.icon";

export const LockSimpleOpenIcon = memo(function LockSimpleOpen(
  props: IconWrapperProps,
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
