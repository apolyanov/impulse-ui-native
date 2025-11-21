import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MetronomeBoldIcon } from "../bold";
import { MetronomeDuotoneIcon } from "../duotone";
import { MetronomeFillIcon } from "../fill";
import { MetronomeLightIcon } from "../light";
import { MetronomeRegularIcon } from "../regular";
import { MetronomeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MetronomeIcon = memo(function Metronome(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MetronomeBoldIcon,
      duotone: MetronomeDuotoneIcon,
      fill: MetronomeFillIcon,
      light: MetronomeLightIcon,
      regular: MetronomeRegularIcon,
      thin: MetronomeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
