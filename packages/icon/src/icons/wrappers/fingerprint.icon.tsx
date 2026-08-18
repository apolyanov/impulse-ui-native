import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FingerprintBoldIcon } from "../bold/fingerprint-bold.icon";
import { FingerprintDuotoneIcon } from "../duotone/fingerprint-duotone.icon";
import { FingerprintFillIcon } from "../fill/fingerprint-fill.icon";
import { FingerprintLightIcon } from "../light/fingerprint-light.icon";
import { FingerprintRegularIcon } from "../regular/fingerprint-regular.icon";
import { FingerprintThinIcon } from "../thin/fingerprint-thin.icon";

export const FingerprintIcon = memo(function Fingerprint(
  props: IconWrapperProps,
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
