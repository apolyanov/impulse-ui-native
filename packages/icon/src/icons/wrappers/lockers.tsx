import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockersBold } from "../bold";
import { LockersDuotone } from "../duotone";
import { LockersFill } from "../fill";
import { LockersLight } from "../light";
import { LockersRegular } from "../regular";
import { LockersThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Lockers = memo(function Lockers(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockersBold,
      duotone: LockersDuotone,
      fill: LockersFill,
      light: LockersLight,
      regular: LockersRegular,
      thin: LockersThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
