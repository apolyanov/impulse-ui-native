import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WarningBoldIcon } from "../bold";
import { WarningDuotoneIcon } from "../duotone";
import { WarningFillIcon } from "../fill";
import { WarningLightIcon } from "../light";
import { WarningRegularIcon } from "../regular";
import { WarningThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
