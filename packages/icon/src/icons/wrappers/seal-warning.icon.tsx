import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SealWarningBoldIcon } from "../bold/seal-warning-bold.icon";
import { SealWarningDuotoneIcon } from "../duotone/seal-warning-duotone.icon";
import { SealWarningFillIcon } from "../fill/seal-warning-fill.icon";
import { SealWarningLightIcon } from "../light/seal-warning-light.icon";
import { SealWarningRegularIcon } from "../regular/seal-warning-regular.icon";
import { SealWarningThinIcon } from "../thin/seal-warning-thin.icon";

export const SealWarningIcon = memo(function SealWarning(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SealWarningBoldIcon,
      duotone: SealWarningDuotoneIcon,
      fill: SealWarningFillIcon,
      light: SealWarningLightIcon,
      regular: SealWarningRegularIcon,
      thin: SealWarningThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
