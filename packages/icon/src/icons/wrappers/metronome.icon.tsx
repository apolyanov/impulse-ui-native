import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MetronomeBoldIcon } from "../bold/metronome-bold.icon";
import { MetronomeDuotoneIcon } from "../duotone/metronome-duotone.icon";
import { MetronomeFillIcon } from "../fill/metronome-fill.icon";
import { MetronomeLightIcon } from "../light/metronome-light.icon";
import { MetronomeRegularIcon } from "../regular/metronome-regular.icon";
import { MetronomeThinIcon } from "../thin/metronome-thin.icon";

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
