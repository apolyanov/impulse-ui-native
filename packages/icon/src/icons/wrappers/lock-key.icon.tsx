import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LockKeyBoldIcon } from "../bold/lock-key-bold.icon";
import { LockKeyDuotoneIcon } from "../duotone/lock-key-duotone.icon";
import { LockKeyFillIcon } from "../fill/lock-key-fill.icon";
import { LockKeyLightIcon } from "../light/lock-key-light.icon";
import { LockKeyRegularIcon } from "../regular/lock-key-regular.icon";
import { LockKeyThinIcon } from "../thin/lock-key-thin.icon";

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
