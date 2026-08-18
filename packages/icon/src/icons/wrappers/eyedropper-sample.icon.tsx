import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EyedropperSampleBoldIcon } from "../bold/eyedropper-sample-bold.icon";
import { EyedropperSampleDuotoneIcon } from "../duotone/eyedropper-sample-duotone.icon";
import { EyedropperSampleFillIcon } from "../fill/eyedropper-sample-fill.icon";
import { EyedropperSampleLightIcon } from "../light/eyedropper-sample-light.icon";
import { EyedropperSampleRegularIcon } from "../regular/eyedropper-sample-regular.icon";
import { EyedropperSampleThinIcon } from "../thin/eyedropper-sample-thin.icon";

export const EyedropperSampleIcon = memo(function EyedropperSample(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyedropperSampleBoldIcon,
      duotone: EyedropperSampleDuotoneIcon,
      fill: EyedropperSampleFillIcon,
      light: EyedropperSampleLightIcon,
      regular: EyedropperSampleRegularIcon,
      thin: EyedropperSampleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
