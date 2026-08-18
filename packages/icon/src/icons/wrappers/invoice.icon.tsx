import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { InvoiceBoldIcon } from "../bold/invoice-bold.icon";
import { InvoiceDuotoneIcon } from "../duotone/invoice-duotone.icon";
import { InvoiceFillIcon } from "../fill/invoice-fill.icon";
import { InvoiceLightIcon } from "../light/invoice-light.icon";
import { InvoiceRegularIcon } from "../regular/invoice-regular.icon";
import { InvoiceThinIcon } from "../thin/invoice-thin.icon";

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
