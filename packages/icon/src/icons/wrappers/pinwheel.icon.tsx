import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PinwheelBoldIcon } from "../bold/pinwheel-bold.icon";
import { PinwheelDuotoneIcon } from "../duotone/pinwheel-duotone.icon";
import { PinwheelFillIcon } from "../fill/pinwheel-fill.icon";
import { PinwheelLightIcon } from "../light/pinwheel-light.icon";
import { PinwheelRegularIcon } from "../regular/pinwheel-regular.icon";
import { PinwheelThinIcon } from "../thin/pinwheel-thin.icon";

export const PinwheelIcon = memo(function Pinwheel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PinwheelBoldIcon,
      duotone: PinwheelDuotoneIcon,
      fill: PinwheelFillIcon,
      light: PinwheelLightIcon,
      regular: PinwheelRegularIcon,
      thin: PinwheelThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
