import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RocketLaunchBold } from "../bold";
import { RocketLaunchDuotone } from "../duotone";
import { RocketLaunchFill } from "../fill";
import { RocketLaunchLight } from "../light";
import { RocketLaunchRegular } from "../regular";
import { RocketLaunchThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RocketLaunch = memo(function RocketLaunch(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RocketLaunchBold,
      duotone: RocketLaunchDuotone,
      fill: RocketLaunchFill,
      light: RocketLaunchLight,
      regular: RocketLaunchRegular,
      thin: RocketLaunchThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
