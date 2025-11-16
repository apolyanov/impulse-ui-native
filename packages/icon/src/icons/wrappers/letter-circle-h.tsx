import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LetterCircleHBold } from "../bold";
import { LetterCircleHDuotone } from "../duotone";
import { LetterCircleHFill } from "../fill";
import { LetterCircleHLight } from "../light";
import { LetterCircleHRegular } from "../regular";
import { LetterCircleHThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LetterCircleH = memo(function LetterCircleH(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LetterCircleHBold,
      duotone: LetterCircleHDuotone,
      fill: LetterCircleHFill,
      light: LetterCircleHLight,
      regular: LetterCircleHRegular,
      thin: LetterCircleHThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
