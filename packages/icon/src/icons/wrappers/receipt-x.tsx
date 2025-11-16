import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ReceiptXBold } from "../bold";
import { ReceiptXDuotone } from "../duotone";
import { ReceiptXFill } from "../fill";
import { ReceiptXLight } from "../light";
import { ReceiptXRegular } from "../regular";
import { ReceiptXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ReceiptX = memo(function ReceiptX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ReceiptXBold,
      duotone: ReceiptXDuotone,
      fill: ReceiptXFill,
      light: ReceiptXLight,
      regular: ReceiptXRegular,
      thin: ReceiptXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
