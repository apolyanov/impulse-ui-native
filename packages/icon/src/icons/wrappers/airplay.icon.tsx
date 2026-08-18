import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AirplayBoldIcon } from "../bold/airplay-bold.icon";
import { AirplayDuotoneIcon } from "../duotone/airplay-duotone.icon";
import { AirplayFillIcon } from "../fill/airplay-fill.icon";
import { AirplayLightIcon } from "../light/airplay-light.icon";
import { AirplayRegularIcon } from "../regular/airplay-regular.icon";
import { AirplayThinIcon } from "../thin/airplay-thin.icon";

export const AirplayIcon = memo(function Airplay(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplayBoldIcon,
      duotone: AirplayDuotoneIcon,
      fill: AirplayFillIcon,
      light: AirplayLightIcon,
      regular: AirplayRegularIcon,
      thin: AirplayThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
