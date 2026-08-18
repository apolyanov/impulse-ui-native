import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandTapBoldIcon } from "../bold/hand-tap-bold.icon";
import { HandTapDuotoneIcon } from "../duotone/hand-tap-duotone.icon";
import { HandTapFillIcon } from "../fill/hand-tap-fill.icon";
import { HandTapLightIcon } from "../light/hand-tap-light.icon";
import { HandTapRegularIcon } from "../regular/hand-tap-regular.icon";
import { HandTapThinIcon } from "../thin/hand-tap-thin.icon";

export const HandTapIcon = memo(function HandTap(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandTapBoldIcon,
      duotone: HandTapDuotoneIcon,
      fill: HandTapFillIcon,
      light: HandTapLightIcon,
      regular: HandTapRegularIcon,
      thin: HandTapThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
