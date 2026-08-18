import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WallBoldIcon } from "../bold/wall-bold.icon";
import { WallDuotoneIcon } from "../duotone/wall-duotone.icon";
import { WallFillIcon } from "../fill/wall-fill.icon";
import { WallLightIcon } from "../light/wall-light.icon";
import { WallRegularIcon } from "../regular/wall-regular.icon";
import { WallThinIcon } from "../thin/wall-thin.icon";

export const WallIcon = memo(function Wall(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WallBoldIcon,
      duotone: WallDuotoneIcon,
      fill: WallFillIcon,
      light: WallLightIcon,
      regular: WallRegularIcon,
      thin: WallThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
