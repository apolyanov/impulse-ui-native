import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandPointingBoldIcon } from "../bold";
import { HandPointingDuotoneIcon } from "../duotone";
import { HandPointingFillIcon } from "../fill";
import { HandPointingLightIcon } from "../light";
import { HandPointingRegularIcon } from "../regular";
import { HandPointingThinIcon } from "../thin";

export const HandPointingIcon = memo(function HandPointing(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandPointingBoldIcon,
      duotone: HandPointingDuotoneIcon,
      fill: HandPointingFillIcon,
      light: HandPointingLightIcon,
      regular: HandPointingRegularIcon,
      thin: HandPointingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
