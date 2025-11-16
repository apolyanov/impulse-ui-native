import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StairsBold } from "../bold";
import { StairsDuotone } from "../duotone";
import { StairsFill } from "../fill";
import { StairsLight } from "../light";
import { StairsRegular } from "../regular";
import { StairsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Stairs = memo(function Stairs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StairsBold,
      duotone: StairsDuotone,
      fill: StairsFill,
      light: StairsLight,
      regular: StairsRegular,
      thin: StairsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
