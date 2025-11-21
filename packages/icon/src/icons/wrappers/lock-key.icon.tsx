import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockKeyBoldIcon } from "../bold";
import { LockKeyDuotoneIcon } from "../duotone";
import { LockKeyFillIcon } from "../fill";
import { LockKeyLightIcon } from "../light";
import { LockKeyRegularIcon } from "../regular";
import { LockKeyThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LockKeyIcon = memo(function LockKey(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockKeyBoldIcon,
      duotone: LockKeyDuotoneIcon,
      fill: LockKeyFillIcon,
      light: LockKeyLightIcon,
      regular: LockKeyRegularIcon,
      thin: LockKeyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
