import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EnvelopeBold } from "../bold";
import { EnvelopeDuotone } from "../duotone";
import { EnvelopeFill } from "../fill";
import { EnvelopeLight } from "../light";
import { EnvelopeRegular } from "../regular";
import { EnvelopeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Envelope = memo(function Envelope(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EnvelopeBold,
      duotone: EnvelopeDuotone,
      fill: EnvelopeFill,
      light: EnvelopeLight,
      regular: EnvelopeRegular,
      thin: EnvelopeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
