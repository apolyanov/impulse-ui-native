import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VignetteBold } from "../bold";
import { VignetteDuotone } from "../duotone";
import { VignetteFill } from "../fill";
import { VignetteLight } from "../light";
import { VignetteRegular } from "../regular";
import { VignetteThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Vignette = memo(function Vignette(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VignetteBold,
      duotone: VignetteDuotone,
      fill: VignetteFill,
      light: VignetteLight,
      regular: VignetteRegular,
      thin: VignetteThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
