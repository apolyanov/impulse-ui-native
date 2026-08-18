import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ExamBoldIcon } from "../bold/exam-bold.icon";
import { ExamDuotoneIcon } from "../duotone/exam-duotone.icon";
import { ExamFillIcon } from "../fill/exam-fill.icon";
import { ExamLightIcon } from "../light/exam-light.icon";
import { ExamRegularIcon } from "../regular/exam-regular.icon";
import { ExamThinIcon } from "../thin/exam-thin.icon";

export const ExamIcon = memo(function Exam(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ExamBoldIcon,
      duotone: ExamDuotoneIcon,
      fill: ExamFillIcon,
      light: ExamLightIcon,
      regular: ExamRegularIcon,
      thin: ExamThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
