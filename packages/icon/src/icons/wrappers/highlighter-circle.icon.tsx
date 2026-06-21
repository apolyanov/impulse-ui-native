import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HighlighterCircleBoldIcon } from "../bold";
import { HighlighterCircleDuotoneIcon } from "../duotone";
import { HighlighterCircleFillIcon } from "../fill";
import { HighlighterCircleLightIcon } from "../light";
import { HighlighterCircleRegularIcon } from "../regular";
import { HighlighterCircleThinIcon } from "../thin";

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
