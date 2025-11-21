import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AirTrafficControlBoldIcon } from "../bold";
import { AirTrafficControlDuotoneIcon } from "../duotone";
import { AirTrafficControlFillIcon } from "../fill";
import { AirTrafficControlLightIcon } from "../light";
import { AirTrafficControlRegularIcon } from "../regular";
import { AirTrafficControlThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AirTrafficControlIcon = memo(function AirTrafficControl(
  props: IconWrapperProps
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
