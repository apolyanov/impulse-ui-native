import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { QuestionBold } from "../bold";
import { QuestionDuotone } from "../duotone";
import { QuestionFill } from "../fill";
import { QuestionLight } from "../light";
import { QuestionRegular } from "../regular";
import { QuestionThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Question = memo(function Question(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: QuestionBold,
      duotone: QuestionDuotone,
      fill: QuestionFill,
      light: QuestionLight,
      regular: QuestionRegular,
      thin: QuestionThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
