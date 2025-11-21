import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GlobeStandBoldIcon } from "../bold";
import { GlobeStandDuotoneIcon } from "../duotone";
import { GlobeStandFillIcon } from "../fill";
import { GlobeStandLightIcon } from "../light";
import { GlobeStandRegularIcon } from "../regular";
import { GlobeStandThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GlobeStandIcon = memo(function GlobeStand(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeStandBoldIcon,
      duotone: GlobeStandDuotoneIcon,
      fill: GlobeStandFillIcon,
      light: GlobeStandLightIcon,
      regular: GlobeStandRegularIcon,
      thin: GlobeStandThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
