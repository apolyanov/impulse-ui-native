import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CertificateBoldIcon } from "../bold/certificate-bold.icon";
import { CertificateDuotoneIcon } from "../duotone/certificate-duotone.icon";
import { CertificateFillIcon } from "../fill/certificate-fill.icon";
import { CertificateLightIcon } from "../light/certificate-light.icon";
import { CertificateRegularIcon } from "../regular/certificate-regular.icon";
import { CertificateThinIcon } from "../thin/certificate-thin.icon";

export const CertificateIcon = memo(function Certificate(
  props: IconWrapperProps,
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
