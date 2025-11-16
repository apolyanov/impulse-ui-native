import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockOpenBold } from "../bold";
import { LockOpenDuotone } from "../duotone";
import { LockOpenFill } from "../fill";
import { LockOpenLight } from "../light";
import { LockOpenRegular } from "../regular";
import { LockOpenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LockOpen = memo(function LockOpen(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockOpenBold,
      duotone: LockOpenDuotone,
      fill: LockOpenFill,
      light: LockOpenLight,
      regular: LockOpenRegular,
      thin: LockOpenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
