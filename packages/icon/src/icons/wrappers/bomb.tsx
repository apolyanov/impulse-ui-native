import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BombBold } from "../bold";
import { BombDuotone } from "../duotone";
import { BombFill } from "../fill";
import { BombLight } from "../light";
import { BombRegular } from "../regular";
import { BombThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bomb = memo(function Bomb(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BombBold,
      duotone: BombDuotone,
      fill: BombFill,
      light: BombLight,
      regular: BombRegular,
      thin: BombThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
