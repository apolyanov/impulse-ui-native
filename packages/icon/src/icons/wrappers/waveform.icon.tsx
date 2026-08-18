import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WaveformBoldIcon } from "../bold/waveform-bold.icon";
import { WaveformDuotoneIcon } from "../duotone/waveform-duotone.icon";
import { WaveformFillIcon } from "../fill/waveform-fill.icon";
import { WaveformLightIcon } from "../light/waveform-light.icon";
import { WaveformRegularIcon } from "../regular/waveform-regular.icon";
import { WaveformThinIcon } from "../thin/waveform-thin.icon";

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
