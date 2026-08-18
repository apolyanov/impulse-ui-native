import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AirTrafficControlBoldIcon } from "../bold/air-traffic-control-bold.icon";
import { AirTrafficControlDuotoneIcon } from "../duotone/air-traffic-control-duotone.icon";
import { AirTrafficControlFillIcon } from "../fill/air-traffic-control-fill.icon";
import { AirTrafficControlLightIcon } from "../light/air-traffic-control-light.icon";
import { AirTrafficControlRegularIcon } from "../regular/air-traffic-control-regular.icon";
import { AirTrafficControlThinIcon } from "../thin/air-traffic-control-thin.icon";

export const AirTrafficControlIcon = memo(function AirTrafficControl(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirTrafficControlBoldIcon,
      duotone: AirTrafficControlDuotoneIcon,
      fill: AirTrafficControlFillIcon,
      light: AirTrafficControlLightIcon,
      regular: AirTrafficControlRegularIcon,
      thin: AirTrafficControlThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
