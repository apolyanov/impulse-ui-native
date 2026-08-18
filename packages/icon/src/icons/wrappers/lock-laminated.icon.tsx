import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LockLaminatedBoldIcon } from "../bold/lock-laminated-bold.icon";
import { LockLaminatedDuotoneIcon } from "../duotone/lock-laminated-duotone.icon";
import { LockLaminatedFillIcon } from "../fill/lock-laminated-fill.icon";
import { LockLaminatedLightIcon } from "../light/lock-laminated-light.icon";
import { LockLaminatedRegularIcon } from "../regular/lock-laminated-regular.icon";
import { LockLaminatedThinIcon } from "../thin/lock-laminated-thin.icon";

export const LockLaminatedIcon = memo(function LockLaminated(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockLaminatedBoldIcon,
      duotone: LockLaminatedDuotoneIcon,
      fill: LockLaminatedFillIcon,
      light: LockLaminatedLightIcon,
      regular: LockLaminatedRegularIcon,
      thin: LockLaminatedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
