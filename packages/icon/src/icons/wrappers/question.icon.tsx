import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { QuestionBoldIcon } from "../bold/question-bold.icon";
import { QuestionDuotoneIcon } from "../duotone/question-duotone.icon";
import { QuestionFillIcon } from "../fill/question-fill.icon";
import { QuestionLightIcon } from "../light/question-light.icon";
import { QuestionRegularIcon } from "../regular/question-regular.icon";
import { QuestionThinIcon } from "../thin/question-thin.icon";

export const QuestionIcon = memo(function Question(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: QuestionBoldIcon,
      duotone: QuestionDuotoneIcon,
      fill: QuestionFillIcon,
      light: QuestionLightIcon,
      regular: QuestionRegularIcon,
      thin: QuestionThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
