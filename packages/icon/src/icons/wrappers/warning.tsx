import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WarningBold } from "../bold";
import { WarningDuotone } from "../duotone";
import { WarningFill } from "../fill";
import { WarningLight } from "../light";
import { WarningRegular } from "../regular";
import { WarningThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Warning = memo(function Warning(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WarningBold,
      duotone: WarningDuotone,
      fill: WarningFill,
      light: WarningLight,
      regular: WarningRegular,
      thin: WarningThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
