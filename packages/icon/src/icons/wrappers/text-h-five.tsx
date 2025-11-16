import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextHFiveBold } from "../bold";
import { TextHFiveDuotone } from "../duotone";
import { TextHFiveFill } from "../fill";
import { TextHFiveLight } from "../light";
import { TextHFiveRegular } from "../regular";
import { TextHFiveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextHFive = memo(function TextHFive(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHFiveBold,
      duotone: TextHFiveDuotone,
      fill: TextHFiveFill,
      light: TextHFiveLight,
      regular: TextHFiveRegular,
      thin: TextHFiveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
