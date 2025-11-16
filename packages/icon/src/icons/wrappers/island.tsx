import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IslandBold } from "../bold";
import { IslandDuotone } from "../duotone";
import { IslandFill } from "../fill";
import { IslandLight } from "../light";
import { IslandRegular } from "../regular";
import { IslandThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Island = memo(function Island(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IslandBold,
      duotone: IslandDuotone,
      fill: IslandFill,
      light: IslandLight,
      regular: IslandRegular,
      thin: IslandThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
