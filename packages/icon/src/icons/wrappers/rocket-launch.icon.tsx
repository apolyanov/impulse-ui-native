import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RocketLaunchBoldIcon } from "../bold";
import { RocketLaunchDuotoneIcon } from "../duotone";
import { RocketLaunchFillIcon } from "../fill";
import { RocketLaunchLightIcon } from "../light";
import { RocketLaunchRegularIcon } from "../regular";
import { RocketLaunchThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RocketLaunchIcon = memo(function RocketLaunch(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RocketLaunchBoldIcon,
      duotone: RocketLaunchDuotoneIcon,
      fill: RocketLaunchFillIcon,
      light: RocketLaunchLightIcon,
      regular: RocketLaunchRegularIcon,
      thin: RocketLaunchThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
