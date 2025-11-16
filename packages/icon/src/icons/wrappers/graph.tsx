import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GraphBold } from "../bold";
import { GraphDuotone } from "../duotone";
import { GraphFill } from "../fill";
import { GraphLight } from "../light";
import { GraphRegular } from "../regular";
import { GraphThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Graph = memo(function Graph(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GraphBold,
      duotone: GraphDuotone,
      fill: GraphFill,
      light: GraphLight,
      regular: GraphRegular,
      thin: GraphThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
