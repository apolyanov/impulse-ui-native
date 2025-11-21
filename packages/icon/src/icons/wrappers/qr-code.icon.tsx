import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { QrCodeBoldIcon } from "../bold";
import { QrCodeDuotoneIcon } from "../duotone";
import { QrCodeFillIcon } from "../fill";
import { QrCodeLightIcon } from "../light";
import { QrCodeRegularIcon } from "../regular";
import { QrCodeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const QrCodeIcon = memo(function QrCode(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: QrCodeBoldIcon,
      duotone: QrCodeDuotoneIcon,
      fill: QrCodeFillIcon,
      light: QrCodeLightIcon,
      regular: QrCodeRegularIcon,
      thin: QrCodeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
