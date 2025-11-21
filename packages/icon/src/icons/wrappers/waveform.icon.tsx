import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WaveformBoldIcon } from "../bold";
import { WaveformDuotoneIcon } from "../duotone";
import { WaveformFillIcon } from "../fill";
import { WaveformLightIcon } from "../light";
import { WaveformRegularIcon } from "../regular";
import { WaveformThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WaveformIcon = memo(function Waveform(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WaveformBoldIcon,
      duotone: WaveformDuotoneIcon,
      fill: WaveformFillIcon,
      light: WaveformLightIcon,
      regular: WaveformRegularIcon,
      thin: WaveformThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
