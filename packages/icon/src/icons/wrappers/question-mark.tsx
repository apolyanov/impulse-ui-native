import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { QuestionMarkBold } from "../bold";
import { QuestionMarkDuotone } from "../duotone";
import { QuestionMarkFill } from "../fill";
import { QuestionMarkLight } from "../light";
import { QuestionMarkRegular } from "../regular";
import { QuestionMarkThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const QuestionMark = memo(function QuestionMark(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: QuestionMarkBold,
      duotone: QuestionMarkDuotone,
      fill: QuestionMarkFill,
      light: QuestionMarkLight,
      regular: QuestionMarkRegular,
      thin: QuestionMarkThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
