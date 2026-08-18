import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LetterCircleVBoldIcon } from "../bold/letter-circle-v-bold.icon";
import { LetterCircleVDuotoneIcon } from "../duotone/letter-circle-v-duotone.icon";
import { LetterCircleVFillIcon } from "../fill/letter-circle-v-fill.icon";
import { LetterCircleVLightIcon } from "../light/letter-circle-v-light.icon";
import { LetterCircleVRegularIcon } from "../regular/letter-circle-v-regular.icon";
import { LetterCircleVThinIcon } from "../thin/letter-circle-v-thin.icon";

export const LetterCircleVIcon = memo(function LetterCircleV(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LetterCircleVBoldIcon,
      duotone: LetterCircleVDuotoneIcon,
      fill: LetterCircleVFillIcon,
      light: LetterCircleVLightIcon,
      regular: LetterCircleVRegularIcon,
      thin: LetterCircleVThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
