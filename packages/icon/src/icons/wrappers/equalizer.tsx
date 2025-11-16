import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EqualizerBold } from "../bold";
import { EqualizerDuotone } from "../duotone";
import { EqualizerFill } from "../fill";
import { EqualizerLight } from "../light";
import { EqualizerRegular } from "../regular";
import { EqualizerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Equalizer = memo(function Equalizer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EqualizerBold,
      duotone: EqualizerDuotone,
      fill: EqualizerFill,
      light: EqualizerLight,
      regular: EqualizerRegular,
      thin: EqualizerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
