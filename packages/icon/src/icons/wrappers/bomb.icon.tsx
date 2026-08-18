import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BombBoldIcon } from "../bold/bomb-bold.icon";
import { BombDuotoneIcon } from "../duotone/bomb-duotone.icon";
import { BombFillIcon } from "../fill/bomb-fill.icon";
import { BombLightIcon } from "../light/bomb-light.icon";
import { BombRegularIcon } from "../regular/bomb-regular.icon";
import { BombThinIcon } from "../thin/bomb-thin.icon";

export const BombIcon = memo(function Bomb(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BombBoldIcon,
      duotone: BombDuotoneIcon,
      fill: BombFillIcon,
      light: BombLightIcon,
      regular: BombRegularIcon,
      thin: BombThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
