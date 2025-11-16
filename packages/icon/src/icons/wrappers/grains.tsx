import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GrainsBold } from "../bold";
import { GrainsDuotone } from "../duotone";
import { GrainsFill } from "../fill";
import { GrainsLight } from "../light";
import { GrainsRegular } from "../regular";
import { GrainsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Grains = memo(function Grains(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GrainsBold,
      duotone: GrainsDuotone,
      fill: GrainsFill,
      light: GrainsLight,
      regular: GrainsRegular,
      thin: GrainsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
