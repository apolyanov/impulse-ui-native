import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FingerprintBoldIcon } from "../bold";
import { FingerprintDuotoneIcon } from "../duotone";
import { FingerprintFillIcon } from "../fill";
import { FingerprintLightIcon } from "../light";
import { FingerprintRegularIcon } from "../regular";
import { FingerprintThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FingerprintIcon = memo(function Fingerprint(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FingerprintBoldIcon,
      duotone: FingerprintDuotoneIcon,
      fill: FingerprintFillIcon,
      light: FingerprintLightIcon,
      regular: FingerprintRegularIcon,
      thin: FingerprintThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
