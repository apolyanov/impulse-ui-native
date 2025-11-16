import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClosedCaptioningBold } from "../bold";
import { ClosedCaptioningDuotone } from "../duotone";
import { ClosedCaptioningFill } from "../fill";
import { ClosedCaptioningLight } from "../light";
import { ClosedCaptioningRegular } from "../regular";
import { ClosedCaptioningThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ClosedCaptioning = memo(function ClosedCaptioning(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClosedCaptioningBold,
      duotone: ClosedCaptioningDuotone,
      fill: ClosedCaptioningFill,
      light: ClosedCaptioningLight,
      regular: ClosedCaptioningRegular,
      thin: ClosedCaptioningThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
