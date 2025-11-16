import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { InvoiceBold } from "../bold";
import { InvoiceDuotone } from "../duotone";
import { InvoiceFill } from "../fill";
import { InvoiceLight } from "../light";
import { InvoiceRegular } from "../regular";
import { InvoiceThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Invoice = memo(function Invoice(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: InvoiceBold,
      duotone: InvoiceDuotone,
      fill: InvoiceFill,
      light: InvoiceLight,
      regular: InvoiceRegular,
      thin: InvoiceThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
