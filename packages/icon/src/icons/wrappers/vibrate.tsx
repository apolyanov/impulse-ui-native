import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VibrateBold } from "../bold";
import { VibrateDuotone } from "../duotone";
import { VibrateFill } from "../fill";
import { VibrateLight } from "../light";
import { VibrateRegular } from "../regular";
import { VibrateThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Vibrate = memo(function Vibrate(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VibrateBold,
      duotone: VibrateDuotone,
      fill: VibrateFill,
      light: VibrateLight,
      regular: VibrateRegular,
      thin: VibrateThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
