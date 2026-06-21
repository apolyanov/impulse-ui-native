import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HeadlightsBoldIcon } from "../bold";
import { HeadlightsDuotoneIcon } from "../duotone";
import { HeadlightsFillIcon } from "../fill";
import { HeadlightsLightIcon } from "../light";
import { HeadlightsRegularIcon } from "../regular";
import { HeadlightsThinIcon } from "../thin";

export const HeadlightsIcon = memo(function Headlights(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeadlightsBoldIcon,
      duotone: HeadlightsDuotoneIcon,
      fill: HeadlightsFillIcon,
      light: HeadlightsLightIcon,
      regular: HeadlightsRegularIcon,
      thin: HeadlightsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
