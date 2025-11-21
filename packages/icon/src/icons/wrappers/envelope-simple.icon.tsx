import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EnvelopeSimpleBoldIcon } from "../bold";
import { EnvelopeSimpleDuotoneIcon } from "../duotone";
import { EnvelopeSimpleFillIcon } from "../fill";
import { EnvelopeSimpleLightIcon } from "../light";
import { EnvelopeSimpleRegularIcon } from "../regular";
import { EnvelopeSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EnvelopeSimpleIcon = memo(function EnvelopeSimple(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EnvelopeSimpleBoldIcon,
      duotone: EnvelopeSimpleDuotoneIcon,
      fill: EnvelopeSimpleFillIcon,
      light: EnvelopeSimpleLightIcon,
      regular: EnvelopeSimpleRegularIcon,
      thin: EnvelopeSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
