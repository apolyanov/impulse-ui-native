import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AirplaneLandingBold } from "../bold";
import { AirplaneLandingDuotone } from "../duotone";
import { AirplaneLandingFill } from "../fill";
import { AirplaneLandingLight } from "../light";
import { AirplaneLandingRegular } from "../regular";
import { AirplaneLandingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AirplaneLanding = memo(function AirplaneLanding(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplaneLandingBold,
      duotone: AirplaneLandingDuotone,
      fill: AirplaneLandingFill,
      light: AirplaneLandingLight,
      regular: AirplaneLandingRegular,
      thin: AirplaneLandingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
