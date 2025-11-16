import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumpadBold } from "../bold";
import { NumpadDuotone } from "../duotone";
import { NumpadFill } from "../fill";
import { NumpadLight } from "../light";
import { NumpadRegular } from "../regular";
import { NumpadThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Numpad = memo(function Numpad(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumpadBold,
      duotone: NumpadDuotone,
      fill: NumpadFill,
      light: NumpadLight,
      regular: NumpadRegular,
      thin: NumpadThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
