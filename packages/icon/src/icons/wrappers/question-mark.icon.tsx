import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { QuestionMarkBoldIcon } from "../bold/question-mark-bold.icon";
import { QuestionMarkDuotoneIcon } from "../duotone/question-mark-duotone.icon";
import { QuestionMarkFillIcon } from "../fill/question-mark-fill.icon";
import { QuestionMarkLightIcon } from "../light/question-mark-light.icon";
import { QuestionMarkRegularIcon } from "../regular/question-mark-regular.icon";
import { QuestionMarkThinIcon } from "../thin/question-mark-thin.icon";

export const QuestionMarkIcon = memo(function QuestionMark(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: QuestionMarkBoldIcon,
      duotone: QuestionMarkDuotoneIcon,
      fill: QuestionMarkFillIcon,
      light: QuestionMarkLightIcon,
      regular: QuestionMarkRegularIcon,
      thin: QuestionMarkThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
