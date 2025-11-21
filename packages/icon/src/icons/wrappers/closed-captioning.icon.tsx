import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClosedCaptioningBoldIcon } from "../bold";
import { ClosedCaptioningDuotoneIcon } from "../duotone";
import { ClosedCaptioningFillIcon } from "../fill";
import { ClosedCaptioningLightIcon } from "../light";
import { ClosedCaptioningRegularIcon } from "../regular";
import { ClosedCaptioningThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ClosedCaptioningIcon = memo(function ClosedCaptioning(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClosedCaptioningBoldIcon,
      duotone: ClosedCaptioningDuotoneIcon,
      fill: ClosedCaptioningFillIcon,
      light: ClosedCaptioningLightIcon,
      regular: ClosedCaptioningRegularIcon,
      thin: ClosedCaptioningThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
