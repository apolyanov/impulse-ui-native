import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WaveformSlashBoldIcon } from "../bold";
import { WaveformSlashDuotoneIcon } from "../duotone";
import { WaveformSlashFillIcon } from "../fill";
import { WaveformSlashLightIcon } from "../light";
import { WaveformSlashRegularIcon } from "../regular";
import { WaveformSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WaveformSlashIcon = memo(function WaveformSlash(
  props: IconWrapperProps
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
