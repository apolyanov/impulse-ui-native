import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShieldWarningBoldIcon } from "../bold/shield-warning-bold.icon";
import { ShieldWarningDuotoneIcon } from "../duotone/shield-warning-duotone.icon";
import { ShieldWarningFillIcon } from "../fill/shield-warning-fill.icon";
import { ShieldWarningLightIcon } from "../light/shield-warning-light.icon";
import { ShieldWarningRegularIcon } from "../regular/shield-warning-regular.icon";
import { ShieldWarningThinIcon } from "../thin/shield-warning-thin.icon";

export const ShieldWarningIcon = memo(function ShieldWarning(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldWarningBoldIcon,
      duotone: ShieldWarningDuotoneIcon,
      fill: ShieldWarningFillIcon,
      light: ShieldWarningLightIcon,
      regular: ShieldWarningRegularIcon,
      thin: ShieldWarningThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
