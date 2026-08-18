import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WaveformSlashBoldIcon } from "../bold/waveform-slash-bold.icon";
import { WaveformSlashDuotoneIcon } from "../duotone/waveform-slash-duotone.icon";
import { WaveformSlashFillIcon } from "../fill/waveform-slash-fill.icon";
import { WaveformSlashLightIcon } from "../light/waveform-slash-light.icon";
import { WaveformSlashRegularIcon } from "../regular/waveform-slash-regular.icon";
import { WaveformSlashThinIcon } from "../thin/waveform-slash-thin.icon";

export const WaveformSlashIcon = memo(function WaveformSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WaveformSlashBoldIcon,
      duotone: WaveformSlashDuotoneIcon,
      fill: WaveformSlashFillIcon,
      light: WaveformSlashLightIcon,
      regular: WaveformSlashRegularIcon,
      thin: WaveformSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
