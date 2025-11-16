import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EyedropperBold } from "../bold";
import { EyedropperDuotone } from "../duotone";
import { EyedropperFill } from "../fill";
import { EyedropperLight } from "../light";
import { EyedropperRegular } from "../regular";
import { EyedropperThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Eyedropper = memo(function Eyedropper(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyedropperBold,
      duotone: EyedropperDuotone,
      fill: EyedropperFill,
      light: EyedropperLight,
      regular: EyedropperRegular,
      thin: EyedropperThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
