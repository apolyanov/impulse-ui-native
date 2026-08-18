import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LockBoldIcon } from "../bold/lock-bold.icon";
import { LockDuotoneIcon } from "../duotone/lock-duotone.icon";
import { LockFillIcon } from "../fill/lock-fill.icon";
import { LockLightIcon } from "../light/lock-light.icon";
import { LockRegularIcon } from "../regular/lock-regular.icon";
import { LockThinIcon } from "../thin/lock-thin.icon";

export const LockIcon = memo(function Lock(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockBoldIcon,
      duotone: LockDuotoneIcon,
      fill: LockFillIcon,
      light: LockLightIcon,
      regular: LockRegularIcon,
      thin: LockThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
