import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockKeyBold } from "../bold";
import { LockKeyDuotone } from "../duotone";
import { LockKeyFill } from "../fill";
import { LockKeyLight } from "../light";
import { LockKeyRegular } from "../regular";
import { LockKeyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LockKey = memo(function LockKey(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockKeyBold,
      duotone: LockKeyDuotone,
      fill: LockKeyFill,
      light: LockKeyLight,
      regular: LockKeyRegular,
      thin: LockKeyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
