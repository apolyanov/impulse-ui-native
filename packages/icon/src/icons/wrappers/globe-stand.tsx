import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GlobeStandBold } from "../bold";
import { GlobeStandDuotone } from "../duotone";
import { GlobeStandFill } from "../fill";
import { GlobeStandLight } from "../light";
import { GlobeStandRegular } from "../regular";
import { GlobeStandThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GlobeStand = memo(function GlobeStand(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeStandBold,
      duotone: GlobeStandDuotone,
      fill: GlobeStandFill,
      light: GlobeStandLight,
      regular: GlobeStandRegular,
      thin: GlobeStandThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
