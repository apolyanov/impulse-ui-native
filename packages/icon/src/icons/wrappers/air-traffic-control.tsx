import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AirTrafficControlBold } from "../bold";
import { AirTrafficControlDuotone } from "../duotone";
import { AirTrafficControlFill } from "../fill";
import { AirTrafficControlLight } from "../light";
import { AirTrafficControlRegular } from "../regular";
import { AirTrafficControlThin } from "../thin";

export const AirTrafficControl = memo(function AirTrafficControl(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirTrafficControlBold,
      duotone: AirTrafficControlDuotone,
      fill: AirTrafficControlFill,
      light: AirTrafficControlLight,
      regular: AirTrafficControlRegular,
      thin: AirTrafficControlThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
