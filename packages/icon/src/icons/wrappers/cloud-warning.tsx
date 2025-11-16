import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudWarningBold } from "../bold";
import { CloudWarningDuotone } from "../duotone";
import { CloudWarningFill } from "../fill";
import { CloudWarningLight } from "../light";
import { CloudWarningRegular } from "../regular";
import { CloudWarningThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudWarning = memo(function CloudWarning(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudWarningBold,
      duotone: CloudWarningDuotone,
      fill: CloudWarningFill,
      light: CloudWarningLight,
      regular: CloudWarningRegular,
      thin: CloudWarningThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
