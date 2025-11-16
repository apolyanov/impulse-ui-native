import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpinnerGapBold } from "../bold";
import { SpinnerGapDuotone } from "../duotone";
import { SpinnerGapFill } from "../fill";
import { SpinnerGapLight } from "../light";
import { SpinnerGapRegular } from "../regular";
import { SpinnerGapThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpinnerGap = memo(function SpinnerGap(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpinnerGapBold,
      duotone: SpinnerGapDuotone,
      fill: SpinnerGapFill,
      light: SpinnerGapLight,
      regular: SpinnerGapRegular,
      thin: SpinnerGapThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
