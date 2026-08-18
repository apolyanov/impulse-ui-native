import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumpadBoldIcon } from "../bold/numpad-bold.icon";
import { NumpadDuotoneIcon } from "../duotone/numpad-duotone.icon";
import { NumpadFillIcon } from "../fill/numpad-fill.icon";
import { NumpadLightIcon } from "../light/numpad-light.icon";
import { NumpadRegularIcon } from "../regular/numpad-regular.icon";
import { NumpadThinIcon } from "../thin/numpad-thin.icon";

export const NumpadIcon = memo(function Numpad(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumpadBoldIcon,
      duotone: NumpadDuotoneIcon,
      fill: NumpadFillIcon,
      light: NumpadLightIcon,
      regular: NumpadRegularIcon,
      thin: NumpadThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
