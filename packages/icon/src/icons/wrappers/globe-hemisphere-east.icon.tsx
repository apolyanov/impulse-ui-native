import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GlobeHemisphereEastBoldIcon } from "../bold/globe-hemisphere-east-bold.icon";
import { GlobeHemisphereEastDuotoneIcon } from "../duotone/globe-hemisphere-east-duotone.icon";
import { GlobeHemisphereEastFillIcon } from "../fill/globe-hemisphere-east-fill.icon";
import { GlobeHemisphereEastLightIcon } from "../light/globe-hemisphere-east-light.icon";
import { GlobeHemisphereEastRegularIcon } from "../regular/globe-hemisphere-east-regular.icon";
import { GlobeHemisphereEastThinIcon } from "../thin/globe-hemisphere-east-thin.icon";

export const GlobeHemisphereEastIcon = memo(function GlobeHemisphereEast(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeHemisphereEastBoldIcon,
      duotone: GlobeHemisphereEastDuotoneIcon,
      fill: GlobeHemisphereEastFillIcon,
      light: GlobeHemisphereEastLightIcon,
      regular: GlobeHemisphereEastRegularIcon,
      thin: GlobeHemisphereEastThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
