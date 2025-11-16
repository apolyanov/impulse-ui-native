import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LockLaminatedBold } from "../bold";
import { LockLaminatedDuotone } from "../duotone";
import { LockLaminatedFill } from "../fill";
import { LockLaminatedLight } from "../light";
import { LockLaminatedRegular } from "../regular";
import { LockLaminatedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LockLaminated = memo(function LockLaminated(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LockLaminatedBold,
      duotone: LockLaminatedDuotone,
      fill: LockLaminatedFill,
      light: LockLaminatedLight,
      regular: LockLaminatedRegular,
      thin: LockLaminatedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
