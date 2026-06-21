import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VibrateBoldIcon } from "../bold";
import { VibrateDuotoneIcon } from "../duotone";
import { VibrateFillIcon } from "../fill";
import { VibrateLightIcon } from "../light";
import { VibrateRegularIcon } from "../regular";
import { VibrateThinIcon } from "../thin";

export const VibrateIcon = memo(function Vibrate(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VibrateBoldIcon,
      duotone: VibrateDuotoneIcon,
      fill: VibrateFillIcon,
      light: VibrateLightIcon,
      regular: VibrateRegularIcon,
      thin: VibrateThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
