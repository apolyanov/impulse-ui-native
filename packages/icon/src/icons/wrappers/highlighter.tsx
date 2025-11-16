import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HighlighterBold } from "../bold";
import { HighlighterDuotone } from "../duotone";
import { HighlighterFill } from "../fill";
import { HighlighterLight } from "../light";
import { HighlighterRegular } from "../regular";
import { HighlighterThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Highlighter = memo(function Highlighter(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HighlighterBold,
      duotone: HighlighterDuotone,
      fill: HighlighterFill,
      light: HighlighterLight,
      regular: HighlighterRegular,
      thin: HighlighterThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
