import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeadlightsBold } from "../bold";
import { HeadlightsDuotone } from "../duotone";
import { HeadlightsFill } from "../fill";
import { HeadlightsLight } from "../light";
import { HeadlightsRegular } from "../regular";
import { HeadlightsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Headlights = memo(function Headlights(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeadlightsBold,
      duotone: HeadlightsDuotone,
      fill: HeadlightsFill,
      light: HeadlightsLight,
      regular: HeadlightsRegular,
      thin: HeadlightsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
