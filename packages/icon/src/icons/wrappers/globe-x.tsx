import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GlobeXBold } from "../bold";
import { GlobeXDuotone } from "../duotone";
import { GlobeXFill } from "../fill";
import { GlobeXLight } from "../light";
import { GlobeXRegular } from "../regular";
import { GlobeXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GlobeX = memo(function GlobeX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeXBold,
      duotone: GlobeXDuotone,
      fill: GlobeXFill,
      light: GlobeXLight,
      regular: GlobeXRegular,
      thin: GlobeXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
