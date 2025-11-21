import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CertificateBoldIcon } from "../bold";
import { CertificateDuotoneIcon } from "../duotone";
import { CertificateFillIcon } from "../fill";
import { CertificateLightIcon } from "../light";
import { CertificateRegularIcon } from "../regular";
import { CertificateThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CertificateIcon = memo(function Certificate(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CertificateBoldIcon,
      duotone: CertificateDuotoneIcon,
      fill: CertificateFillIcon,
      light: CertificateLightIcon,
      regular: CertificateRegularIcon,
      thin: CertificateThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
