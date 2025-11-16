import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SealPercentBold } from "../bold";
import { SealPercentDuotone } from "../duotone";
import { SealPercentFill } from "../fill";
import { SealPercentLight } from "../light";
import { SealPercentRegular } from "../regular";
import { SealPercentThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SealPercent = memo(function SealPercent(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SealPercentBold,
      duotone: SealPercentDuotone,
      fill: SealPercentFill,
      light: SealPercentLight,
      regular: SealPercentRegular,
      thin: SealPercentThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
