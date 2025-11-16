import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UsbBold } from "../bold";
import { UsbDuotone } from "../duotone";
import { UsbFill } from "../fill";
import { UsbLight } from "../light";
import { UsbRegular } from "../regular";
import { UsbThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Usb = memo(function Usb(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UsbBold,
      duotone: UsbDuotone,
      fill: UsbFill,
      light: UsbLight,
      regular: UsbRegular,
      thin: UsbThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
