import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VibrateBoldIcon } from "../bold/vibrate-bold.icon";
import { VibrateDuotoneIcon } from "../duotone/vibrate-duotone.icon";
import { VibrateFillIcon } from "../fill/vibrate-fill.icon";
import { VibrateLightIcon } from "../light/vibrate-light.icon";
import { VibrateRegularIcon } from "../regular/vibrate-regular.icon";
import { VibrateThinIcon } from "../thin/vibrate-thin.icon";

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
