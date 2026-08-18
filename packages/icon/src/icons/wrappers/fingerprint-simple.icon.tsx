import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FingerprintSimpleBoldIcon } from "../bold/fingerprint-simple-bold.icon";
import { FingerprintSimpleDuotoneIcon } from "../duotone/fingerprint-simple-duotone.icon";
import { FingerprintSimpleFillIcon } from "../fill/fingerprint-simple-fill.icon";
import { FingerprintSimpleLightIcon } from "../light/fingerprint-simple-light.icon";
import { FingerprintSimpleRegularIcon } from "../regular/fingerprint-simple-regular.icon";
import { FingerprintSimpleThinIcon } from "../thin/fingerprint-simple-thin.icon";

export const FingerprintSimpleIcon = memo(function FingerprintSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FingerprintSimpleBoldIcon,
      duotone: FingerprintSimpleDuotoneIcon,
      fill: FingerprintSimpleFillIcon,
      light: FingerprintSimpleLightIcon,
      regular: FingerprintSimpleRegularIcon,
      thin: FingerprintSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
