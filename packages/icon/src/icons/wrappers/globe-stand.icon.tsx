import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GlobeStandBoldIcon } from "../bold/globe-stand-bold.icon";
import { GlobeStandDuotoneIcon } from "../duotone/globe-stand-duotone.icon";
import { GlobeStandFillIcon } from "../fill/globe-stand-fill.icon";
import { GlobeStandLightIcon } from "../light/globe-stand-light.icon";
import { GlobeStandRegularIcon } from "../regular/globe-stand-regular.icon";
import { GlobeStandThinIcon } from "../thin/globe-stand-thin.icon";

export const GlobeStandIcon = memo(function GlobeStand(
  props: IconWrapperProps,
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
