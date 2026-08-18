import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LockOpenBoldIcon } from "../bold/lock-open-bold.icon";
import { LockOpenDuotoneIcon } from "../duotone/lock-open-duotone.icon";
import { LockOpenFillIcon } from "../fill/lock-open-fill.icon";
import { LockOpenLightIcon } from "../light/lock-open-light.icon";
import { LockOpenRegularIcon } from "../regular/lock-open-regular.icon";
import { LockOpenThinIcon } from "../thin/lock-open-thin.icon";

export const LockOpenIcon = memo(function LockOpen(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockOpenBoldIcon,
      duotone: LockOpenDuotoneIcon,
      fill: LockOpenFillIcon,
      light: LockOpenLightIcon,
      regular: LockOpenRegularIcon,
      thin: LockOpenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
