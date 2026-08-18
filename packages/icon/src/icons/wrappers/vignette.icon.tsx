import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VignetteBoldIcon } from "../bold/vignette-bold.icon";
import { VignetteDuotoneIcon } from "../duotone/vignette-duotone.icon";
import { VignetteFillIcon } from "../fill/vignette-fill.icon";
import { VignetteLightIcon } from "../light/vignette-light.icon";
import { VignetteRegularIcon } from "../regular/vignette-regular.icon";
import { VignetteThinIcon } from "../thin/vignette-thin.icon";

export const VignetteIcon = memo(function Vignette(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VignetteBoldIcon,
      duotone: VignetteDuotoneIcon,
      fill: VignetteFillIcon,
      light: VignetteLightIcon,
      regular: VignetteRegularIcon,
      thin: VignetteThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
