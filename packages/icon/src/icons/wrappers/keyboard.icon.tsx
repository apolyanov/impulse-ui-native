import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { KeyboardBoldIcon } from "../bold/keyboard-bold.icon";
import { KeyboardDuotoneIcon } from "../duotone/keyboard-duotone.icon";
import { KeyboardFillIcon } from "../fill/keyboard-fill.icon";
import { KeyboardLightIcon } from "../light/keyboard-light.icon";
import { KeyboardRegularIcon } from "../regular/keyboard-regular.icon";
import { KeyboardThinIcon } from "../thin/keyboard-thin.icon";

export const KeyboardIcon = memo(function Keyboard(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: KeyboardBoldIcon,
      duotone: KeyboardDuotoneIcon,
      fill: KeyboardFillIcon,
      light: KeyboardLightIcon,
      regular: KeyboardRegularIcon,
      thin: KeyboardThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
