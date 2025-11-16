import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GlobeHemisphereEastBold } from "../bold";
import { GlobeHemisphereEastDuotone } from "../duotone";
import { GlobeHemisphereEastFill } from "../fill";
import { GlobeHemisphereEastLight } from "../light";
import { GlobeHemisphereEastRegular } from "../regular";
import { GlobeHemisphereEastThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GlobeHemisphereEast = memo(function GlobeHemisphereEast(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeHemisphereEastBold,
      duotone: GlobeHemisphereEastDuotone,
      fill: GlobeHemisphereEastFill,
      light: GlobeHemisphereEastLight,
      regular: GlobeHemisphereEastRegular,
      thin: GlobeHemisphereEastThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
