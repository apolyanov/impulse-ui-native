import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SealQuestionBoldIcon } from "../bold/seal-question-bold.icon";
import { SealQuestionDuotoneIcon } from "../duotone/seal-question-duotone.icon";
import { SealQuestionFillIcon } from "../fill/seal-question-fill.icon";
import { SealQuestionLightIcon } from "../light/seal-question-light.icon";
import { SealQuestionRegularIcon } from "../regular/seal-question-regular.icon";
import { SealQuestionThinIcon } from "../thin/seal-question-thin.icon";

export const SealQuestionIcon = memo(function SealQuestion(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SealQuestionBoldIcon,
      duotone: SealQuestionDuotoneIcon,
      fill: SealQuestionFillIcon,
      light: SealQuestionLightIcon,
      regular: SealQuestionRegularIcon,
      thin: SealQuestionThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
