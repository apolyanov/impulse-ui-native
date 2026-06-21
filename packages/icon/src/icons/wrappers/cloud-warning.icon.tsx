import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudWarningBoldIcon } from "../bold";
import { CloudWarningDuotoneIcon } from "../duotone";
import { CloudWarningFillIcon } from "../fill";
import { CloudWarningLightIcon } from "../light";
import { CloudWarningRegularIcon } from "../regular";
import { CloudWarningThinIcon } from "../thin";

export const CloudWarningIcon = memo(function CloudWarning(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudWarningBoldIcon,
      duotone: CloudWarningDuotoneIcon,
      fill: CloudWarningFillIcon,
      light: CloudWarningLightIcon,
      regular: CloudWarningRegularIcon,
      thin: CloudWarningThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
