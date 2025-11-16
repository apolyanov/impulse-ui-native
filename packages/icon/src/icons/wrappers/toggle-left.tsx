import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ToggleLeftBold } from "../bold";
import { ToggleLeftDuotone } from "../duotone";
import { ToggleLeftFill } from "../fill";
import { ToggleLeftLight } from "../light";
import { ToggleLeftRegular } from "../regular";
import { ToggleLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ToggleLeft = memo(function ToggleLeft(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToggleLeftBold,
      duotone: ToggleLeftDuotone,
      fill: ToggleLeftFill,
      light: ToggleLeftLight,
      regular: ToggleLeftRegular,
      thin: ToggleLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
