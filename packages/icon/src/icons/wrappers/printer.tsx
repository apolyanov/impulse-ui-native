import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PrinterBold } from "../bold";
import { PrinterDuotone } from "../duotone";
import { PrinterFill } from "../fill";
import { PrinterLight } from "../light";
import { PrinterRegular } from "../regular";
import { PrinterThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Printer = memo(function Printer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PrinterBold,
      duotone: PrinterDuotone,
      fill: PrinterFill,
      light: PrinterLight,
      regular: PrinterRegular,
      thin: PrinterThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
