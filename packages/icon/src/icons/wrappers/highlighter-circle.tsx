import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HighlighterCircleBold } from "../bold";
import { HighlighterCircleDuotone } from "../duotone";
import { HighlighterCircleFill } from "../fill";
import { HighlighterCircleLight } from "../light";
import { HighlighterCircleRegular } from "../regular";
import { HighlighterCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HighlighterCircle = memo(function HighlighterCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HighlighterCircleBold,
      duotone: HighlighterCircleDuotone,
      fill: HighlighterCircleFill,
      light: HighlighterCircleLight,
      regular: HighlighterCircleRegular,
      thin: HighlighterCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
