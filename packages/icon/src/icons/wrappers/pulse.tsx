import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PulseBold } from "../bold";
import { PulseDuotone } from "../duotone";
import { PulseFill } from "../fill";
import { PulseLight } from "../light";
import { PulseRegular } from "../regular";
import { PulseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Pulse = memo(function Pulse(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PulseBold,
      duotone: PulseDuotone,
      fill: PulseFill,
      light: PulseLight,
      regular: PulseRegular,
      thin: PulseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
