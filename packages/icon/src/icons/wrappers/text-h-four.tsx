import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextHFourBold } from "../bold";
import { TextHFourDuotone } from "../duotone";
import { TextHFourFill } from "../fill";
import { TextHFourLight } from "../light";
import { TextHFourRegular } from "../regular";
import { TextHFourThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextHFour = memo(function TextHFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHFourBold,
      duotone: TextHFourDuotone,
      fill: TextHFourFill,
      light: TextHFourLight,
      regular: TextHFourRegular,
      thin: TextHFourThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
