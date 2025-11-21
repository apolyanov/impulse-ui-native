import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlarmBoldIcon } from "../bold";
import { AlarmDuotoneIcon } from "../duotone";
import { AlarmFillIcon } from "../fill";
import { AlarmLightIcon } from "../light";
import { AlarmRegularIcon } from "../regular";
import { AlarmThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
