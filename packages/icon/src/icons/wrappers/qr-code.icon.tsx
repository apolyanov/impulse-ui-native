import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { QrCodeBoldIcon } from "../bold/qr-code-bold.icon";
import { QrCodeDuotoneIcon } from "../duotone/qr-code-duotone.icon";
import { QrCodeFillIcon } from "../fill/qr-code-fill.icon";
import { QrCodeLightIcon } from "../light/qr-code-light.icon";
import { QrCodeRegularIcon } from "../regular/qr-code-regular.icon";
import { QrCodeThinIcon } from "../thin/qr-code-thin.icon";

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
