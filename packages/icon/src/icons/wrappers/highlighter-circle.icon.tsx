import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HighlighterCircleBoldIcon } from "../bold/highlighter-circle-bold.icon";
import { HighlighterCircleDuotoneIcon } from "../duotone/highlighter-circle-duotone.icon";
import { HighlighterCircleFillIcon } from "../fill/highlighter-circle-fill.icon";
import { HighlighterCircleLightIcon } from "../light/highlighter-circle-light.icon";
import { HighlighterCircleRegularIcon } from "../regular/highlighter-circle-regular.icon";
import { HighlighterCircleThinIcon } from "../thin/highlighter-circle-thin.icon";

export const HighlighterCircleIcon = memo(function HighlighterCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HighlighterCircleBoldIcon,
      duotone: HighlighterCircleDuotoneIcon,
      fill: HighlighterCircleFillIcon,
      light: HighlighterCircleLightIcon,
      regular: HighlighterCircleRegularIcon,
      thin: HighlighterCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
