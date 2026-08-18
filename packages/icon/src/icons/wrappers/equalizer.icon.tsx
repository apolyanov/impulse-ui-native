import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EqualizerBoldIcon } from "../bold/equalizer-bold.icon";
import { EqualizerDuotoneIcon } from "../duotone/equalizer-duotone.icon";
import { EqualizerFillIcon } from "../fill/equalizer-fill.icon";
import { EqualizerLightIcon } from "../light/equalizer-light.icon";
import { EqualizerRegularIcon } from "../regular/equalizer-regular.icon";
import { EqualizerThinIcon } from "../thin/equalizer-thin.icon";

export const EqualizerIcon = memo(function Equalizer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EqualizerBoldIcon,
      duotone: EqualizerDuotoneIcon,
      fill: EqualizerFillIcon,
      light: EqualizerLightIcon,
      regular: EqualizerRegularIcon,
      thin: EqualizerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
