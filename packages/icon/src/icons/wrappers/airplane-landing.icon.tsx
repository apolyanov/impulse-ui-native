import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AirplaneLandingBoldIcon } from "../bold/airplane-landing-bold.icon";
import { AirplaneLandingDuotoneIcon } from "../duotone/airplane-landing-duotone.icon";
import { AirplaneLandingFillIcon } from "../fill/airplane-landing-fill.icon";
import { AirplaneLandingLightIcon } from "../light/airplane-landing-light.icon";
import { AirplaneLandingRegularIcon } from "../regular/airplane-landing-regular.icon";
import { AirplaneLandingThinIcon } from "../thin/airplane-landing-thin.icon";

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
