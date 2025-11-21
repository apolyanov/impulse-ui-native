import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumpadBoldIcon } from "../bold";
import { NumpadDuotoneIcon } from "../duotone";
import { NumpadFillIcon } from "../fill";
import { NumpadLightIcon } from "../light";
import { NumpadRegularIcon } from "../regular";
import { NumpadThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
