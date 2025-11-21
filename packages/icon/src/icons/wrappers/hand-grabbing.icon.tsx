import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandGrabbingBoldIcon } from "../bold";
import { HandGrabbingDuotoneIcon } from "../duotone";
import { HandGrabbingFillIcon } from "../fill";
import { HandGrabbingLightIcon } from "../light";
import { HandGrabbingRegularIcon } from "../regular";
import { HandGrabbingThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandGrabbingIcon = memo(function HandGrabbing(
  props: IconWrapperProps
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
