import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextHSixBold } from "../bold";
import { TextHSixDuotone } from "../duotone";
import { TextHSixFill } from "../fill";
import { TextHSixLight } from "../light";
import { TextHSixRegular } from "../regular";
import { TextHSixThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextHSix = memo(function TextHSix(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHSixBold,
      duotone: TextHSixDuotone,
      fill: TextHSixFill,
      light: TextHSixLight,
      regular: TextHSixRegular,
      thin: TextHSixThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
