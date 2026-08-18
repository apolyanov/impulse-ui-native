import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LockersBoldIcon } from "../bold/lockers-bold.icon";
import { LockersDuotoneIcon } from "../duotone/lockers-duotone.icon";
import { LockersFillIcon } from "../fill/lockers-fill.icon";
import { LockersLightIcon } from "../light/lockers-light.icon";
import { LockersRegularIcon } from "../regular/lockers-regular.icon";
import { LockersThinIcon } from "../thin/lockers-thin.icon";

export const LockersIcon = memo(function Lockers(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockersBoldIcon,
      duotone: LockersDuotoneIcon,
      fill: LockersFillIcon,
      light: LockersLightIcon,
      regular: LockersRegularIcon,
      thin: LockersThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
