import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EnvelopeSimpleBold } from "../bold";
import { EnvelopeSimpleDuotone } from "../duotone";
import { EnvelopeSimpleFill } from "../fill";
import { EnvelopeSimpleLight } from "../light";
import { EnvelopeSimpleRegular } from "../regular";
import { EnvelopeSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EnvelopeSimple = memo(function EnvelopeSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EnvelopeSimpleBold,
      duotone: EnvelopeSimpleDuotone,
      fill: EnvelopeSimpleFill,
      light: EnvelopeSimpleLight,
      regular: EnvelopeSimpleRegular,
      thin: EnvelopeSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
