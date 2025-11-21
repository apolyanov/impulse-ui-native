import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EnvelopeBoldIcon } from "../bold";
import { EnvelopeDuotoneIcon } from "../duotone";
import { EnvelopeFillIcon } from "../fill";
import { EnvelopeLightIcon } from "../light";
import { EnvelopeRegularIcon } from "../regular";
import { EnvelopeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EnvelopeIcon = memo(function Envelope(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EnvelopeBoldIcon,
      duotone: EnvelopeDuotoneIcon,
      fill: EnvelopeFillIcon,
      light: EnvelopeLightIcon,
      regular: EnvelopeRegularIcon,
      thin: EnvelopeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
