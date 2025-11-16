import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FingerprintBold } from "../bold";
import { FingerprintDuotone } from "../duotone";
import { FingerprintFill } from "../fill";
import { FingerprintLight } from "../light";
import { FingerprintRegular } from "../regular";
import { FingerprintThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Fingerprint = memo(function Fingerprint(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FingerprintBold,
      duotone: FingerprintDuotone,
      fill: FingerprintFill,
      light: FingerprintLight,
      regular: FingerprintRegular,
      thin: FingerprintThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
