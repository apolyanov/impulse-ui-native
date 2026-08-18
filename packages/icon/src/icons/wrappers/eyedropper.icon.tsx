import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EyedropperBoldIcon } from "../bold/eyedropper-bold.icon";
import { EyedropperDuotoneIcon } from "../duotone/eyedropper-duotone.icon";
import { EyedropperFillIcon } from "../fill/eyedropper-fill.icon";
import { EyedropperLightIcon } from "../light/eyedropper-light.icon";
import { EyedropperRegularIcon } from "../regular/eyedropper-regular.icon";
import { EyedropperThinIcon } from "../thin/eyedropper-thin.icon";

export const EyedropperIcon = memo(function Eyedropper(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyedropperBoldIcon,
      duotone: EyedropperDuotoneIcon,
      fill: EyedropperFillIcon,
      light: EyedropperLightIcon,
      regular: EyedropperRegularIcon,
      thin: EyedropperThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
