import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EnvelopeOpenBold } from "../bold";
import { EnvelopeOpenDuotone } from "../duotone";
import { EnvelopeOpenFill } from "../fill";
import { EnvelopeOpenLight } from "../light";
import { EnvelopeOpenRegular } from "../regular";
import { EnvelopeOpenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EnvelopeOpen = memo(function EnvelopeOpen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EnvelopeOpenBold,
      duotone: EnvelopeOpenDuotone,
      fill: EnvelopeOpenFill,
      light: EnvelopeOpenLight,
      regular: EnvelopeOpenRegular,
      thin: EnvelopeOpenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
