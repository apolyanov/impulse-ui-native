import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LockLaminatedOpenBoldIcon } from "../bold/lock-laminated-open-bold.icon";
import { LockLaminatedOpenDuotoneIcon } from "../duotone/lock-laminated-open-duotone.icon";
import { LockLaminatedOpenFillIcon } from "../fill/lock-laminated-open-fill.icon";
import { LockLaminatedOpenLightIcon } from "../light/lock-laminated-open-light.icon";
import { LockLaminatedOpenRegularIcon } from "../regular/lock-laminated-open-regular.icon";
import { LockLaminatedOpenThinIcon } from "../thin/lock-laminated-open-thin.icon";

export const LockLaminatedOpenIcon = memo(function LockLaminatedOpen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockLaminatedOpenBoldIcon,
      duotone: LockLaminatedOpenDuotoneIcon,
      fill: LockLaminatedOpenFillIcon,
      light: LockLaminatedOpenLightIcon,
      regular: LockLaminatedOpenRegularIcon,
      thin: LockLaminatedOpenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
