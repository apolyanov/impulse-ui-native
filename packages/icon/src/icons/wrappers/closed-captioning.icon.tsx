import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ClosedCaptioningBoldIcon } from "../bold/closed-captioning-bold.icon";
import { ClosedCaptioningDuotoneIcon } from "../duotone/closed-captioning-duotone.icon";
import { ClosedCaptioningFillIcon } from "../fill/closed-captioning-fill.icon";
import { ClosedCaptioningLightIcon } from "../light/closed-captioning-light.icon";
import { ClosedCaptioningRegularIcon } from "../regular/closed-captioning-regular.icon";
import { ClosedCaptioningThinIcon } from "../thin/closed-captioning-thin.icon";

export const ClosedCaptioningIcon = memo(function ClosedCaptioning(
  props: IconWrapperProps,
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
