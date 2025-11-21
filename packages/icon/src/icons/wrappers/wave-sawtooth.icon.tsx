import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WaveSawtoothBoldIcon } from "../bold";
import { WaveSawtoothDuotoneIcon } from "../duotone";
import { WaveSawtoothFillIcon } from "../fill";
import { WaveSawtoothLightIcon } from "../light";
import { WaveSawtoothRegularIcon } from "../regular";
import { WaveSawtoothThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WaveSawtoothIcon = memo(function WaveSawtooth(
  props: IconWrapperProps
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
