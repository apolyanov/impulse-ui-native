import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { InvoiceBoldIcon } from "../bold";
import { InvoiceDuotoneIcon } from "../duotone";
import { InvoiceFillIcon } from "../fill";
import { InvoiceLightIcon } from "../light";
import { InvoiceRegularIcon } from "../regular";
import { InvoiceThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const InvoiceIcon = memo(function Invoice(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: InvoiceBoldIcon,
      duotone: InvoiceDuotoneIcon,
      fill: InvoiceFillIcon,
      light: InvoiceLightIcon,
      regular: InvoiceRegularIcon,
      thin: InvoiceThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
