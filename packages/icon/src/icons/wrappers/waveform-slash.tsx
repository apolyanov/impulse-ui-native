import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WaveformSlashBold } from "../bold";
import { WaveformSlashDuotone } from "../duotone";
import { WaveformSlashFill } from "../fill";
import { WaveformSlashLight } from "../light";
import { WaveformSlashRegular } from "../regular";
import { WaveformSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WaveformSlash = memo(function WaveformSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WaveformSlashBold,
      duotone: WaveformSlashDuotone,
      fill: WaveformSlashFill,
      light: WaveformSlashLight,
      regular: WaveformSlashRegular,
      thin: WaveformSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
