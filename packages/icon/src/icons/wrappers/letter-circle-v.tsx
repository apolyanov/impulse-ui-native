import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LetterCircleVBold } from "../bold";
import { LetterCircleVDuotone } from "../duotone";
import { LetterCircleVFill } from "../fill";
import { LetterCircleVLight } from "../light";
import { LetterCircleVRegular } from "../regular";
import { LetterCircleVThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LetterCircleV = memo(function LetterCircleV(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LetterCircleVBold,
      duotone: LetterCircleVDuotone,
      fill: LetterCircleVFill,
      light: LetterCircleVLight,
      regular: LetterCircleVRegular,
      thin: LetterCircleVThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
