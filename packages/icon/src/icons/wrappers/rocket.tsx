import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RocketBold } from "../bold";
import { RocketDuotone } from "../duotone";
import { RocketFill } from "../fill";
import { RocketLight } from "../light";
import { RocketRegular } from "../regular";
import { RocketThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Rocket = memo(function Rocket(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RocketBold,
      duotone: RocketDuotone,
      fill: RocketFill,
      light: RocketLight,
      regular: RocketRegular,
      thin: RocketThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
