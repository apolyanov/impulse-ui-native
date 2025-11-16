import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextUnderlineBold } from "../bold";
import { TextUnderlineDuotone } from "../duotone";
import { TextUnderlineFill } from "../fill";
import { TextUnderlineLight } from "../light";
import { TextUnderlineRegular } from "../regular";
import { TextUnderlineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextUnderline = memo(function TextUnderline(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextUnderlineBold,
      duotone: TextUnderlineDuotone,
      fill: TextUnderlineFill,
      light: TextUnderlineLight,
      regular: TextUnderlineRegular,
      thin: TextUnderlineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
