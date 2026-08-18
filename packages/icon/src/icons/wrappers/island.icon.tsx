import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { IslandBoldIcon } from "../bold/island-bold.icon";
import { IslandDuotoneIcon } from "../duotone/island-duotone.icon";
import { IslandFillIcon } from "../fill/island-fill.icon";
import { IslandLightIcon } from "../light/island-light.icon";
import { IslandRegularIcon } from "../regular/island-regular.icon";
import { IslandThinIcon } from "../thin/island-thin.icon";

export const IslandIcon = memo(function Island(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IslandBoldIcon,
      duotone: IslandDuotoneIcon,
      fill: IslandFillIcon,
      light: IslandLightIcon,
      regular: IslandRegularIcon,
      thin: IslandThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
