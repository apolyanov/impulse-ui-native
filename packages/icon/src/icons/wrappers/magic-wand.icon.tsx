import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MagicWandBoldIcon } from "../bold";
import { MagicWandDuotoneIcon } from "../duotone";
import { MagicWandFillIcon } from "../fill";
import { MagicWandLightIcon } from "../light";
import { MagicWandRegularIcon } from "../regular";
import { MagicWandThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MagicWandIcon = memo(function MagicWand(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MagicWandBoldIcon,
      duotone: MagicWandDuotoneIcon,
      fill: MagicWandFillIcon,
      light: MagicWandLightIcon,
      regular: MagicWandRegularIcon,
      thin: MagicWandThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
