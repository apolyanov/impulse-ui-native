import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ReceiptBold } from "../bold";
import { ReceiptDuotone } from "../duotone";
import { ReceiptFill } from "../fill";
import { ReceiptLight } from "../light";
import { ReceiptRegular } from "../regular";
import { ReceiptThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Receipt = memo(function Receipt(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ReceiptBold,
      duotone: ReceiptDuotone,
      fill: ReceiptFill,
      light: ReceiptLight,
      regular: ReceiptRegular,
      thin: ReceiptThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
