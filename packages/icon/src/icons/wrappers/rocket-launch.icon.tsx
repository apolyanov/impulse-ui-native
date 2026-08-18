import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RocketLaunchBoldIcon } from "../bold/rocket-launch-bold.icon";
import { RocketLaunchDuotoneIcon } from "../duotone/rocket-launch-duotone.icon";
import { RocketLaunchFillIcon } from "../fill/rocket-launch-fill.icon";
import { RocketLaunchLightIcon } from "../light/rocket-launch-light.icon";
import { RocketLaunchRegularIcon } from "../regular/rocket-launch-regular.icon";
import { RocketLaunchThinIcon } from "../thin/rocket-launch-thin.icon";

export const RocketLaunchIcon = memo(function RocketLaunch(
  props: IconWrapperProps,
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
