import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MagicWandBold } from "../bold";
import { MagicWandDuotone } from "../duotone";
import { MagicWandFill } from "../fill";
import { MagicWandLight } from "../light";
import { MagicWandRegular } from "../regular";
import { MagicWandThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MagicWand = memo(function MagicWand(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MagicWandBold,
      duotone: MagicWandDuotone,
      fill: MagicWandFill,
      light: MagicWandLight,
      regular: MagicWandRegular,
      thin: MagicWandThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
