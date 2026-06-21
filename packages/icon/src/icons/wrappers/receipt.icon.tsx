import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ReceiptBoldIcon } from "../bold";
import { ReceiptDuotoneIcon } from "../duotone";
import { ReceiptFillIcon } from "../fill";
import { ReceiptLightIcon } from "../light";
import { ReceiptRegularIcon } from "../regular";
import { ReceiptThinIcon } from "../thin";

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
