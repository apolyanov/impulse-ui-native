import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WavesBoldIcon } from "../bold/waves-bold.icon";
import { WavesDuotoneIcon } from "../duotone/waves-duotone.icon";
import { WavesFillIcon } from "../fill/waves-fill.icon";
import { WavesLightIcon } from "../light/waves-light.icon";
import { WavesRegularIcon } from "../regular/waves-regular.icon";
import { WavesThinIcon } from "../thin/waves-thin.icon";

export const WavesIcon = memo(function Waves(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WavesBoldIcon,
      duotone: WavesDuotoneIcon,
      fill: WavesFillIcon,
      light: WavesLightIcon,
      regular: WavesRegularIcon,
      thin: WavesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
