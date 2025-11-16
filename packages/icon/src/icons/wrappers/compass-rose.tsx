import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CompassRoseBold } from "../bold";
import { CompassRoseDuotone } from "../duotone";
import { CompassRoseFill } from "../fill";
import { CompassRoseLight } from "../light";
import { CompassRoseRegular } from "../regular";
import { CompassRoseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CompassRose = memo(function CompassRose(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CompassRoseBold,
      duotone: CompassRoseDuotone,
      fill: CompassRoseFill,
      light: CompassRoseLight,
      regular: CompassRoseRegular,
      thin: CompassRoseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
