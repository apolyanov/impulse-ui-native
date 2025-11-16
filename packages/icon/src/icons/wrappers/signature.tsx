import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SignatureBold } from "../bold";
import { SignatureDuotone } from "../duotone";
import { SignatureFill } from "../fill";
import { SignatureLight } from "../light";
import { SignatureRegular } from "../regular";
import { SignatureThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Signature = memo(function Signature(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SignatureBold,
      duotone: SignatureDuotone,
      fill: SignatureFill,
      light: SignatureLight,
      regular: SignatureRegular,
      thin: SignatureThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
