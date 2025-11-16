import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WaveSawtoothBold } from "../bold";
import { WaveSawtoothDuotone } from "../duotone";
import { WaveSawtoothFill } from "../fill";
import { WaveSawtoothLight } from "../light";
import { WaveSawtoothRegular } from "../regular";
import { WaveSawtoothThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WaveSawtooth = memo(function WaveSawtooth(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WaveSawtoothBold,
      duotone: WaveSawtoothDuotone,
      fill: WaveSawtoothFill,
      light: WaveSawtoothLight,
      regular: WaveSawtoothRegular,
      thin: WaveSawtoothThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
