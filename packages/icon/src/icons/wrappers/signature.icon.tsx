import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SignatureBoldIcon } from "../bold";
import { SignatureDuotoneIcon } from "../duotone";
import { SignatureFillIcon } from "../fill";
import { SignatureLightIcon } from "../light";
import { SignatureRegularIcon } from "../regular";
import { SignatureThinIcon } from "../thin";

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
