import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextAUnderlineBold } from "../bold";
import { TextAUnderlineDuotone } from "../duotone";
import { TextAUnderlineFill } from "../fill";
import { TextAUnderlineLight } from "../light";
import { TextAUnderlineRegular } from "../regular";
import { TextAUnderlineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextAUnderline = memo(function TextAUnderline(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextAUnderlineBold,
      duotone: TextAUnderlineDuotone,
      fill: TextAUnderlineFill,
      light: TextAUnderlineLight,
      regular: TextAUnderlineRegular,
      thin: TextAUnderlineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
