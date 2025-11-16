import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextItalicBold } from "../bold";
import { TextItalicDuotone } from "../duotone";
import { TextItalicFill } from "../fill";
import { TextItalicLight } from "../light";
import { TextItalicRegular } from "../regular";
import { TextItalicThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextItalic = memo(function TextItalic(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextItalicBold,
      duotone: TextItalicDuotone,
      fill: TextItalicFill,
      light: TextItalicLight,
      regular: TextItalicRegular,
      thin: TextItalicThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
