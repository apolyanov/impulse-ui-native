import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { KeyboardBold } from "../bold";
import { KeyboardDuotone } from "../duotone";
import { KeyboardFill } from "../fill";
import { KeyboardLight } from "../light";
import { KeyboardRegular } from "../regular";
import { KeyboardThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Keyboard = memo(function Keyboard(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: KeyboardBold,
      duotone: KeyboardDuotone,
      fill: KeyboardFill,
      light: KeyboardLight,
      regular: KeyboardRegular,
      thin: KeyboardThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
