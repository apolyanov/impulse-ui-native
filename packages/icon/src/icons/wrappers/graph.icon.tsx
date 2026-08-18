import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GraphBoldIcon } from "../bold/graph-bold.icon";
import { GraphDuotoneIcon } from "../duotone/graph-duotone.icon";
import { GraphFillIcon } from "../fill/graph-fill.icon";
import { GraphLightIcon } from "../light/graph-light.icon";
import { GraphRegularIcon } from "../regular/graph-regular.icon";
import { GraphThinIcon } from "../thin/graph-thin.icon";

export const GraphIcon = memo(function Graph(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GraphBoldIcon,
      duotone: GraphDuotoneIcon,
      fill: GraphFillIcon,
      light: GraphLightIcon,
      regular: GraphRegularIcon,
      thin: GraphThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
