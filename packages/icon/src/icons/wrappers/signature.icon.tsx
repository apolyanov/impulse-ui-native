import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SignatureBoldIcon } from "../bold/signature-bold.icon";
import { SignatureDuotoneIcon } from "../duotone/signature-duotone.icon";
import { SignatureFillIcon } from "../fill/signature-fill.icon";
import { SignatureLightIcon } from "../light/signature-light.icon";
import { SignatureRegularIcon } from "../regular/signature-regular.icon";
import { SignatureThinIcon } from "../thin/signature-thin.icon";

export const SignatureIcon = memo(function Signature(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SignatureBoldIcon,
      duotone: SignatureDuotoneIcon,
      fill: SignatureFillIcon,
      light: SignatureLightIcon,
      regular: SignatureRegularIcon,
      thin: SignatureThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
