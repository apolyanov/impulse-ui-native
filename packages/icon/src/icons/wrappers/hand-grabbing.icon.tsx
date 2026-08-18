import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandGrabbingBoldIcon } from "../bold/hand-grabbing-bold.icon";
import { HandGrabbingDuotoneIcon } from "../duotone/hand-grabbing-duotone.icon";
import { HandGrabbingFillIcon } from "../fill/hand-grabbing-fill.icon";
import { HandGrabbingLightIcon } from "../light/hand-grabbing-light.icon";
import { HandGrabbingRegularIcon } from "../regular/hand-grabbing-regular.icon";
import { HandGrabbingThinIcon } from "../thin/hand-grabbing-thin.icon";

export const HandGrabbingIcon = memo(function HandGrabbing(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandGrabbingBoldIcon,
      duotone: HandGrabbingDuotoneIcon,
      fill: HandGrabbingFillIcon,
      light: HandGrabbingLightIcon,
      regular: HandGrabbingRegularIcon,
      thin: HandGrabbingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
