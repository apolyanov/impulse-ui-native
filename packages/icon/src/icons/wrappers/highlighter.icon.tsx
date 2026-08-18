import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HighlighterBoldIcon } from "../bold/highlighter-bold.icon";
import { HighlighterDuotoneIcon } from "../duotone/highlighter-duotone.icon";
import { HighlighterFillIcon } from "../fill/highlighter-fill.icon";
import { HighlighterLightIcon } from "../light/highlighter-light.icon";
import { HighlighterRegularIcon } from "../regular/highlighter-regular.icon";
import { HighlighterThinIcon } from "../thin/highlighter-thin.icon";

export const HighlighterIcon = memo(function Highlighter(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HighlighterBoldIcon,
      duotone: HighlighterDuotoneIcon,
      fill: HighlighterFillIcon,
      light: HighlighterLightIcon,
      regular: HighlighterRegularIcon,
      thin: HighlighterThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
