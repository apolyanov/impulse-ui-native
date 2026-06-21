import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VignetteBoldIcon } from "../bold";
import { VignetteDuotoneIcon } from "../duotone";
import { VignetteFillIcon } from "../fill";
import { VignetteLightIcon } from "../light";
import { VignetteRegularIcon } from "../regular";
import { VignetteThinIcon } from "../thin";

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
