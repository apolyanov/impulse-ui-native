import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PulseBoldIcon } from "../bold";
import { PulseDuotoneIcon } from "../duotone";
import { PulseFillIcon } from "../fill";
import { PulseLightIcon } from "../light";
import { PulseRegularIcon } from "../regular";
import { PulseThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PulseIcon = memo(function Pulse(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PulseBoldIcon,
      duotone: PulseDuotoneIcon,
      fill: PulseFillIcon,
      light: PulseLightIcon,
      regular: PulseRegularIcon,
      thin: PulseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
