import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WaveSawtoothBoldIcon } from "../bold/wave-sawtooth-bold.icon";
import { WaveSawtoothDuotoneIcon } from "../duotone/wave-sawtooth-duotone.icon";
import { WaveSawtoothFillIcon } from "../fill/wave-sawtooth-fill.icon";
import { WaveSawtoothLightIcon } from "../light/wave-sawtooth-light.icon";
import { WaveSawtoothRegularIcon } from "../regular/wave-sawtooth-regular.icon";
import { WaveSawtoothThinIcon } from "../thin/wave-sawtooth-thin.icon";

export const WaveSawtoothIcon = memo(function WaveSawtooth(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WaveSawtoothBoldIcon,
      duotone: WaveSawtoothDuotoneIcon,
      fill: WaveSawtoothFillIcon,
      light: WaveSawtoothLightIcon,
      regular: WaveSawtoothRegularIcon,
      thin: WaveSawtoothThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
