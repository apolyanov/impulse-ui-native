import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockLaminatedBoldIcon } from "../bold";
import { LockLaminatedDuotoneIcon } from "../duotone";
import { LockLaminatedFillIcon } from "../fill";
import { LockLaminatedLightIcon } from "../light";
import { LockLaminatedRegularIcon } from "../regular";
import { LockLaminatedThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LockLaminatedIcon = memo(function LockLaminated(
  props: IconWrapperProps
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
