import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudWarningBoldIcon } from "../bold/cloud-warning-bold.icon";
import { CloudWarningDuotoneIcon } from "../duotone/cloud-warning-duotone.icon";
import { CloudWarningFillIcon } from "../fill/cloud-warning-fill.icon";
import { CloudWarningLightIcon } from "../light/cloud-warning-light.icon";
import { CloudWarningRegularIcon } from "../regular/cloud-warning-regular.icon";
import { CloudWarningThinIcon } from "../thin/cloud-warning-thin.icon";

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
