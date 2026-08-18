import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RainbowBoldIcon } from "../bold/rainbow-bold.icon";
import { RainbowDuotoneIcon } from "../duotone/rainbow-duotone.icon";
import { RainbowFillIcon } from "../fill/rainbow-fill.icon";
import { RainbowLightIcon } from "../light/rainbow-light.icon";
import { RainbowRegularIcon } from "../regular/rainbow-regular.icon";
import { RainbowThinIcon } from "../thin/rainbow-thin.icon";

export const RainbowIcon = memo(function Rainbow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RainbowBoldIcon,
      duotone: RainbowDuotoneIcon,
      fill: RainbowFillIcon,
      light: RainbowLightIcon,
      regular: RainbowRegularIcon,
      thin: RainbowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
