import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VibrateBoldIcon } from "../bold";
import { VibrateDuotoneIcon } from "../duotone";
import { VibrateFillIcon } from "../fill";
import { VibrateLightIcon } from "../light";
import { VibrateRegularIcon } from "../regular";
import { VibrateThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
