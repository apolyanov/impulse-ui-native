import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PrinterBoldIcon } from "../bold/printer-bold.icon";
import { PrinterDuotoneIcon } from "../duotone/printer-duotone.icon";
import { PrinterFillIcon } from "../fill/printer-fill.icon";
import { PrinterLightIcon } from "../light/printer-light.icon";
import { PrinterRegularIcon } from "../regular/printer-regular.icon";
import { PrinterThinIcon } from "../thin/printer-thin.icon";

export const PrinterIcon = memo(function Printer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PrinterBoldIcon,
      duotone: PrinterDuotoneIcon,
      fill: PrinterFillIcon,
      light: PrinterLightIcon,
      regular: PrinterRegularIcon,
      thin: PrinterThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
