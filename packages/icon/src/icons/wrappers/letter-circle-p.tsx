import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LetterCirclePBold } from "../bold";
import { LetterCirclePDuotone } from "../duotone";
import { LetterCirclePFill } from "../fill";
import { LetterCirclePLight } from "../light";
import { LetterCirclePRegular } from "../regular";
import { LetterCirclePThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LetterCircleP = memo(function LetterCircleP(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LetterCirclePBold,
      duotone: LetterCirclePDuotone,
      fill: LetterCirclePFill,
      light: LetterCirclePLight,
      regular: LetterCirclePRegular,
      thin: LetterCirclePThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
