import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IslandBoldIcon } from "../bold";
import { IslandDuotoneIcon } from "../duotone";
import { IslandFillIcon } from "../fill";
import { IslandLightIcon } from "../light";
import { IslandRegularIcon } from "../regular";
import { IslandThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
