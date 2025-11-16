import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AirplayBold } from "../bold";
import { AirplayDuotone } from "../duotone";
import { AirplayFill } from "../fill";
import { AirplayLight } from "../light";
import { AirplayRegular } from "../regular";
import { AirplayThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Airplay = memo(function Airplay(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplayBold,
      duotone: AirplayDuotone,
      fill: AirplayFill,
      light: AirplayLight,
      regular: AirplayRegular,
      thin: AirplayThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
