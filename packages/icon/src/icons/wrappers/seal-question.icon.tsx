import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SealQuestionBoldIcon } from "../bold";
import { SealQuestionDuotoneIcon } from "../duotone";
import { SealQuestionFillIcon } from "../fill";
import { SealQuestionLightIcon } from "../light";
import { SealQuestionRegularIcon } from "../regular";
import { SealQuestionThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SealQuestionIcon = memo(function SealQuestion(
  props: IconWrapperProps
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
