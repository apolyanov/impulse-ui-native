import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ReceiptBoldIcon } from "../bold/receipt-bold.icon";
import { ReceiptDuotoneIcon } from "../duotone/receipt-duotone.icon";
import { ReceiptFillIcon } from "../fill/receipt-fill.icon";
import { ReceiptLightIcon } from "../light/receipt-light.icon";
import { ReceiptRegularIcon } from "../regular/receipt-regular.icon";
import { ReceiptThinIcon } from "../thin/receipt-thin.icon";

export const ReceiptIcon = memo(function Receipt(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ReceiptBoldIcon,
      duotone: ReceiptDuotoneIcon,
      fill: ReceiptFillIcon,
      light: ReceiptLightIcon,
      regular: ReceiptRegularIcon,
      thin: ReceiptThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
