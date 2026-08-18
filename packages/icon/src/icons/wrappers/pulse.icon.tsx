import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PulseBoldIcon } from "../bold/pulse-bold.icon";
import { PulseDuotoneIcon } from "../duotone/pulse-duotone.icon";
import { PulseFillIcon } from "../fill/pulse-fill.icon";
import { PulseLightIcon } from "../light/pulse-light.icon";
import { PulseRegularIcon } from "../regular/pulse-regular.icon";
import { PulseThinIcon } from "../thin/pulse-thin.icon";

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
