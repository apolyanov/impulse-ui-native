import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextStrikethroughBold } from "../bold";
import { TextStrikethroughDuotone } from "../duotone";
import { TextStrikethroughFill } from "../fill";
import { TextStrikethroughLight } from "../light";
import { TextStrikethroughRegular } from "../regular";
import { TextStrikethroughThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextStrikethrough = memo(function TextStrikethrough(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextStrikethroughBold,
      duotone: TextStrikethroughDuotone,
      fill: TextStrikethroughFill,
      light: TextStrikethroughLight,
      regular: TextStrikethroughRegular,
      thin: TextStrikethroughThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
