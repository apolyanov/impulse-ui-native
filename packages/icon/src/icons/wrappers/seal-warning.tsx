import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SealWarningBold } from "../bold";
import { SealWarningDuotone } from "../duotone";
import { SealWarningFill } from "../fill";
import { SealWarningLight } from "../light";
import { SealWarningRegular } from "../regular";
import { SealWarningThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SealWarning = memo(function SealWarning(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SealWarningBold,
      duotone: SealWarningDuotone,
      fill: SealWarningFill,
      light: SealWarningLight,
      regular: SealWarningRegular,
      thin: SealWarningThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
