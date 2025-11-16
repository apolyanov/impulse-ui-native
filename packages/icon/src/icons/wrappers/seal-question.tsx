import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SealQuestionBold } from "../bold";
import { SealQuestionDuotone } from "../duotone";
import { SealQuestionFill } from "../fill";
import { SealQuestionLight } from "../light";
import { SealQuestionRegular } from "../regular";
import { SealQuestionThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SealQuestion = memo(function SealQuestion(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SealQuestionBold,
      duotone: SealQuestionDuotone,
      fill: SealQuestionFill,
      light: SealQuestionLight,
      regular: SealQuestionRegular,
      thin: SealQuestionThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
