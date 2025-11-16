import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FingerprintSimpleBold } from "../bold";
import { FingerprintSimpleDuotone } from "../duotone";
import { FingerprintSimpleFill } from "../fill";
import { FingerprintSimpleLight } from "../light";
import { FingerprintSimpleRegular } from "../regular";
import { FingerprintSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FingerprintSimple = memo(function FingerprintSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FingerprintSimpleBold,
      duotone: FingerprintSimpleDuotone,
      fill: FingerprintSimpleFill,
      light: FingerprintSimpleLight,
      regular: FingerprintSimpleRegular,
      thin: FingerprintSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
