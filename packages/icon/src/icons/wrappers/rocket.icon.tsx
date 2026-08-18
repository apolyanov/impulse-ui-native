import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RocketBoldIcon } from "../bold/rocket-bold.icon";
import { RocketDuotoneIcon } from "../duotone/rocket-duotone.icon";
import { RocketFillIcon } from "../fill/rocket-fill.icon";
import { RocketLightIcon } from "../light/rocket-light.icon";
import { RocketRegularIcon } from "../regular/rocket-regular.icon";
import { RocketThinIcon } from "../thin/rocket-thin.icon";

export const RocketIcon = memo(function Rocket(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RocketBoldIcon,
      duotone: RocketDuotoneIcon,
      fill: RocketFillIcon,
      light: RocketLightIcon,
      regular: RocketRegularIcon,
      thin: RocketThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
