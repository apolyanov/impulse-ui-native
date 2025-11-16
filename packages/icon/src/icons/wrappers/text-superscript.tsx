import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextSuperscriptBold } from "../bold";
import { TextSuperscriptDuotone } from "../duotone";
import { TextSuperscriptFill } from "../fill";
import { TextSuperscriptLight } from "../light";
import { TextSuperscriptRegular } from "../regular";
import { TextSuperscriptThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextSuperscript = memo(function TextSuperscript(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextSuperscriptBold,
      duotone: TextSuperscriptDuotone,
      fill: TextSuperscriptFill,
      light: TextSuperscriptLight,
      regular: TextSuperscriptRegular,
      thin: TextSuperscriptThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
