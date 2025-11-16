import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlarmBold } from "../bold";
import { AlarmDuotone } from "../duotone";
import { AlarmFill } from "../fill";
import { AlarmLight } from "../light";
import { AlarmRegular } from "../regular";
import { AlarmThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Alarm = memo(function Alarm(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlarmBold,
      duotone: AlarmDuotone,
      fill: AlarmFill,
      light: AlarmLight,
      regular: AlarmRegular,
      thin: AlarmThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
