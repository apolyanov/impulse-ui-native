import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ReceiptXBoldIcon } from "../bold";
import { ReceiptXDuotoneIcon } from "../duotone";
import { ReceiptXFillIcon } from "../fill";
import { ReceiptXLightIcon } from "../light";
import { ReceiptXRegularIcon } from "../regular";
import { ReceiptXThinIcon } from "../thin";

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
