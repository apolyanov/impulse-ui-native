import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockKeyOpenBold } from "../bold";
import { LockKeyOpenDuotone } from "../duotone";
import { LockKeyOpenFill } from "../fill";
import { LockKeyOpenLight } from "../light";
import { LockKeyOpenRegular } from "../regular";
import { LockKeyOpenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LockKeyOpen = memo(function LockKeyOpen(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockKeyOpenBold,
      duotone: LockKeyOpenDuotone,
      fill: LockKeyOpenFill,
      light: LockKeyOpenLight,
      regular: LockKeyOpenRegular,
      thin: LockKeyOpenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
