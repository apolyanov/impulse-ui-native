import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ThreeDBold } from "../bold";
import { ThreeDDuotone } from "../duotone";
import { ThreeDFill } from "../fill";
import { ThreeDLight } from "../light";
import { ThreeDRegular } from "../regular";
import { ThreeDThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ThreeD = memo(function ThreeD(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThreeDBold,
      duotone: ThreeDDuotone,
      fill: ThreeDFill,
      light: ThreeDLight,
      regular: ThreeDRegular,
      thin: ThreeDThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
