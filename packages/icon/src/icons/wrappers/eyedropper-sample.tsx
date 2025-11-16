import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EyedropperSampleBold } from "../bold";
import { EyedropperSampleDuotone } from "../duotone";
import { EyedropperSampleFill } from "../fill";
import { EyedropperSampleLight } from "../light";
import { EyedropperSampleRegular } from "../regular";
import { EyedropperSampleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EyedropperSample = memo(function EyedropperSample(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyedropperSampleBold,
      duotone: EyedropperSampleDuotone,
      fill: EyedropperSampleFill,
      light: EyedropperSampleLight,
      regular: EyedropperSampleRegular,
      thin: EyedropperSampleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
