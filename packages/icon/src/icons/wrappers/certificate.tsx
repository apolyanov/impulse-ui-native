import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CertificateBold } from "../bold";
import { CertificateDuotone } from "../duotone";
import { CertificateFill } from "../fill";
import { CertificateLight } from "../light";
import { CertificateRegular } from "../regular";
import { CertificateThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Certificate = memo(function Certificate(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CertificateBold,
      duotone: CertificateDuotone,
      fill: CertificateFill,
      light: CertificateLight,
      regular: CertificateRegular,
      thin: CertificateThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
