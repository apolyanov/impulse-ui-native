import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShieldWarningBold } from "../bold";
import { ShieldWarningDuotone } from "../duotone";
import { ShieldWarningFill } from "../fill";
import { ShieldWarningLight } from "../light";
import { ShieldWarningRegular } from "../regular";
import { ShieldWarningThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShieldWarning = memo(function ShieldWarning(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldWarningBold,
      duotone: ShieldWarningDuotone,
      fill: ShieldWarningFill,
      light: ShieldWarningLight,
      regular: ShieldWarningRegular,
      thin: ShieldWarningThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
