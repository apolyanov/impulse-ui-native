import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandPointingBoldIcon } from "../bold/hand-pointing-bold.icon";
import { HandPointingDuotoneIcon } from "../duotone/hand-pointing-duotone.icon";
import { HandPointingFillIcon } from "../fill/hand-pointing-fill.icon";
import { HandPointingLightIcon } from "../light/hand-pointing-light.icon";
import { HandPointingRegularIcon } from "../regular/hand-pointing-regular.icon";
import { HandPointingThinIcon } from "../thin/hand-pointing-thin.icon";

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
