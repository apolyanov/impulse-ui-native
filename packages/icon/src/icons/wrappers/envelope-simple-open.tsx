import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EnvelopeSimpleOpenBold } from "../bold";
import { EnvelopeSimpleOpenDuotone } from "../duotone";
import { EnvelopeSimpleOpenFill } from "../fill";
import { EnvelopeSimpleOpenLight } from "../light";
import { EnvelopeSimpleOpenRegular } from "../regular";
import { EnvelopeSimpleOpenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EnvelopeSimpleOpen = memo(function EnvelopeSimpleOpen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EnvelopeSimpleOpenBold,
      duotone: EnvelopeSimpleOpenDuotone,
      fill: EnvelopeSimpleOpenFill,
      light: EnvelopeSimpleOpenLight,
      regular: EnvelopeSimpleOpenRegular,
      thin: EnvelopeSimpleOpenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
