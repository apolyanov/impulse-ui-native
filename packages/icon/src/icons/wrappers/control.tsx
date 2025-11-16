import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ControlBold } from "../bold";
import { ControlDuotone } from "../duotone";
import { ControlFill } from "../fill";
import { ControlLight } from "../light";
import { ControlRegular } from "../regular";
import { ControlThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Control = memo(function Control(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ControlBold,
      duotone: ControlDuotone,
      fill: ControlFill,
      light: ControlLight,
      regular: ControlRegular,
      thin: ControlThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
