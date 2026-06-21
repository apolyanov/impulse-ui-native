import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AirplaneLandingBoldIcon } from "../bold";
import { AirplaneLandingDuotoneIcon } from "../duotone";
import { AirplaneLandingFillIcon } from "../fill";
import { AirplaneLandingLightIcon } from "../light";
import { AirplaneLandingRegularIcon } from "../regular";
import { AirplaneLandingThinIcon } from "../thin";

export const AirplaneLandingIcon = memo(function AirplaneLanding(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplaneLandingBoldIcon,
      duotone: AirplaneLandingDuotoneIcon,
      fill: AirplaneLandingFillIcon,
      light: AirplaneLandingLightIcon,
      regular: AirplaneLandingRegularIcon,
      thin: AirplaneLandingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
