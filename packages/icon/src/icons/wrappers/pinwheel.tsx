import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PinwheelBold } from "../bold";
import { PinwheelDuotone } from "../duotone";
import { PinwheelFill } from "../fill";
import { PinwheelLight } from "../light";
import { PinwheelRegular } from "../regular";
import { PinwheelThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Pinwheel = memo(function Pinwheel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PinwheelBold,
      duotone: PinwheelDuotone,
      fill: PinwheelFill,
      light: PinwheelLight,
      regular: PinwheelRegular,
      thin: PinwheelThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
