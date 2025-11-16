import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockBold } from "../bold";
import { LockDuotone } from "../duotone";
import { LockFill } from "../fill";
import { LockLight } from "../light";
import { LockRegular } from "../regular";
import { LockThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Lock = memo(function Lock(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockBold,
      duotone: LockDuotone,
      fill: LockFill,
      light: LockLight,
      regular: LockRegular,
      thin: LockThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
