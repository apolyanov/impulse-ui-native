import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HeadlightsBoldIcon } from "../bold/headlights-bold.icon";
import { HeadlightsDuotoneIcon } from "../duotone/headlights-duotone.icon";
import { HeadlightsFillIcon } from "../fill/headlights-fill.icon";
import { HeadlightsLightIcon } from "../light/headlights-light.icon";
import { HeadlightsRegularIcon } from "../regular/headlights-regular.icon";
import { HeadlightsThinIcon } from "../thin/headlights-thin.icon";

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
