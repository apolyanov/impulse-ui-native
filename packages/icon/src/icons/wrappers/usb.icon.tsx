import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UsbBoldIcon } from "../bold/usb-bold.icon";
import { UsbDuotoneIcon } from "../duotone/usb-duotone.icon";
import { UsbFillIcon } from "../fill/usb-fill.icon";
import { UsbLightIcon } from "../light/usb-light.icon";
import { UsbRegularIcon } from "../regular/usb-regular.icon";
import { UsbThinIcon } from "../thin/usb-thin.icon";

export const UsbIcon = memo(function Usb(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UsbBoldIcon,
      duotone: UsbDuotoneIcon,
      fill: UsbFillIcon,
      light: UsbLightIcon,
      regular: UsbRegularIcon,
      thin: UsbThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
