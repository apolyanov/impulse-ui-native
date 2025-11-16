import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandGrabbingBold } from "../bold";
import { HandGrabbingDuotone } from "../duotone";
import { HandGrabbingFill } from "../fill";
import { HandGrabbingLight } from "../light";
import { HandGrabbingRegular } from "../regular";
import { HandGrabbingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandGrabbing = memo(function HandGrabbing(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandGrabbingBold,
      duotone: HandGrabbingDuotone,
      fill: HandGrabbingFill,
      light: HandGrabbingLight,
      regular: HandGrabbingRegular,
      thin: HandGrabbingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
