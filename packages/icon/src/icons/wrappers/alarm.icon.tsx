import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlarmBoldIcon } from "../bold/alarm-bold.icon";
import { AlarmDuotoneIcon } from "../duotone/alarm-duotone.icon";
import { AlarmFillIcon } from "../fill/alarm-fill.icon";
import { AlarmLightIcon } from "../light/alarm-light.icon";
import { AlarmRegularIcon } from "../regular/alarm-regular.icon";
import { AlarmThinIcon } from "../thin/alarm-thin.icon";

export const AlarmIcon = memo(function Alarm(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlarmBoldIcon,
      duotone: AlarmDuotoneIcon,
      fill: AlarmFillIcon,
      light: AlarmLightIcon,
      regular: AlarmRegularIcon,
      thin: AlarmThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
