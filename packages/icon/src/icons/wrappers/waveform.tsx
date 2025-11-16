import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WaveformBold } from "../bold";
import { WaveformDuotone } from "../duotone";
import { WaveformFill } from "../fill";
import { WaveformLight } from "../light";
import { WaveformRegular } from "../regular";
import { WaveformThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Waveform = memo(function Waveform(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WaveformBold,
      duotone: WaveformDuotone,
      fill: WaveformFill,
      light: WaveformLight,
      regular: WaveformRegular,
      thin: WaveformThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
