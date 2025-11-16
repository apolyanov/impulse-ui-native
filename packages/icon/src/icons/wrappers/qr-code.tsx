import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { QrCodeBold } from "../bold";
import { QrCodeDuotone } from "../duotone";
import { QrCodeFill } from "../fill";
import { QrCodeLight } from "../light";
import { QrCodeRegular } from "../regular";
import { QrCodeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const QrCode = memo(function QrCode(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: QrCodeBold,
      duotone: QrCodeDuotone,
      fill: QrCodeFill,
      light: QrCodeLight,
      regular: QrCodeRegular,
      thin: QrCodeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
