import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WarningBoldIcon } from "../bold/warning-bold.icon";
import { WarningDuotoneIcon } from "../duotone/warning-duotone.icon";
import { WarningFillIcon } from "../fill/warning-fill.icon";
import { WarningLightIcon } from "../light/warning-light.icon";
import { WarningRegularIcon } from "../regular/warning-regular.icon";
import { WarningThinIcon } from "../thin/warning-thin.icon";

export const WarningIcon = memo(function Warning(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WarningBoldIcon,
      duotone: WarningDuotoneIcon,
      fill: WarningFillIcon,
      light: WarningLightIcon,
      regular: WarningRegularIcon,
      thin: WarningThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
