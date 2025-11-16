import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MetronomeBold } from "../bold";
import { MetronomeDuotone } from "../duotone";
import { MetronomeFill } from "../fill";
import { MetronomeLight } from "../light";
import { MetronomeRegular } from "../regular";
import { MetronomeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Metronome = memo(function Metronome(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MetronomeBold,
      duotone: MetronomeDuotone,
      fill: MetronomeFill,
      light: MetronomeLight,
      regular: MetronomeRegular,
      thin: MetronomeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
