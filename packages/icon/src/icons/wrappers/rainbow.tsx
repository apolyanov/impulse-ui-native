import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RainbowBold } from "../bold";
import { RainbowDuotone } from "../duotone";
import { RainbowFill } from "../fill";
import { RainbowLight } from "../light";
import { RainbowRegular } from "../regular";
import { RainbowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Rainbow = memo(function Rainbow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RainbowBold,
      duotone: RainbowDuotone,
      fill: RainbowFill,
      light: RainbowLight,
      regular: RainbowRegular,
      thin: RainbowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
