import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockOpenBoldIcon } from "../bold";
import { LockOpenDuotoneIcon } from "../duotone";
import { LockOpenFillIcon } from "../fill";
import { LockOpenLightIcon } from "../light";
import { LockOpenRegularIcon } from "../regular";
import { LockOpenThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
