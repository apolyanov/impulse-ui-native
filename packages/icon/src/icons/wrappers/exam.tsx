import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ExamBold } from "../bold";
import { ExamDuotone } from "../duotone";
import { ExamFill } from "../fill";
import { ExamLight } from "../light";
import { ExamRegular } from "../regular";
import { ExamThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Exam = memo(function Exam(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ExamBold,
      duotone: ExamDuotone,
      fill: ExamFill,
      light: ExamLight,
      regular: ExamRegular,
      thin: ExamThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
