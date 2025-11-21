import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PrinterBoldIcon } from "../bold";
import { PrinterDuotoneIcon } from "../duotone";
import { PrinterFillIcon } from "../fill";
import { PrinterLightIcon } from "../light";
import { PrinterRegularIcon } from "../regular";
import { PrinterThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
