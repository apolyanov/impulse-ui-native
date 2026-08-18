import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ReceiptXBoldIcon } from "../bold/receipt-x-bold.icon";
import { ReceiptXDuotoneIcon } from "../duotone/receipt-x-duotone.icon";
import { ReceiptXFillIcon } from "../fill/receipt-x-fill.icon";
import { ReceiptXLightIcon } from "../light/receipt-x-light.icon";
import { ReceiptXRegularIcon } from "../regular/receipt-x-regular.icon";
import { ReceiptXThinIcon } from "../thin/receipt-x-thin.icon";

export const ReceiptXIcon = memo(function ReceiptX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ReceiptXBoldIcon,
      duotone: ReceiptXDuotoneIcon,
      fill: ReceiptXFillIcon,
      light: ReceiptXLightIcon,
      regular: ReceiptXRegularIcon,
      thin: ReceiptXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
