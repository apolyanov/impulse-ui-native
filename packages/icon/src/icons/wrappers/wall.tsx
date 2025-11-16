import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WallBold } from "../bold";
import { WallDuotone } from "../duotone";
import { WallFill } from "../fill";
import { WallLight } from "../light";
import { WallRegular } from "../regular";
import { WallThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Wall = memo(function Wall(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WallBold,
      duotone: WallDuotone,
      fill: WallFill,
      light: WallLight,
      regular: WallRegular,
      thin: WallThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
