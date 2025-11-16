import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WavesBold } from "../bold";
import { WavesDuotone } from "../duotone";
import { WavesFill } from "../fill";
import { WavesLight } from "../light";
import { WavesRegular } from "../regular";
import { WavesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Waves = memo(function Waves(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WavesBold,
      duotone: WavesDuotone,
      fill: WavesFill,
      light: WavesLight,
      regular: WavesRegular,
      thin: WavesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
