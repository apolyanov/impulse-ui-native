import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LetterCircleHBoldIcon } from "../bold/letter-circle-h-bold.icon";
import { LetterCircleHDuotoneIcon } from "../duotone/letter-circle-h-duotone.icon";
import { LetterCircleHFillIcon } from "../fill/letter-circle-h-fill.icon";
import { LetterCircleHLightIcon } from "../light/letter-circle-h-light.icon";
import { LetterCircleHRegularIcon } from "../regular/letter-circle-h-regular.icon";
import { LetterCircleHThinIcon } from "../thin/letter-circle-h-thin.icon";

export const LetterCircleHIcon = memo(function LetterCircleH(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LetterCircleHBoldIcon,
      duotone: LetterCircleHDuotoneIcon,
      fill: LetterCircleHFillIcon,
      light: LetterCircleHLightIcon,
      regular: LetterCircleHRegularIcon,
      thin: LetterCircleHThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
