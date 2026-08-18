import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LetterCirclePBoldIcon } from "../bold/letter-circle-p-bold.icon";
import { LetterCirclePDuotoneIcon } from "../duotone/letter-circle-p-duotone.icon";
import { LetterCirclePFillIcon } from "../fill/letter-circle-p-fill.icon";
import { LetterCirclePLightIcon } from "../light/letter-circle-p-light.icon";
import { LetterCirclePRegularIcon } from "../regular/letter-circle-p-regular.icon";
import { LetterCirclePThinIcon } from "../thin/letter-circle-p-thin.icon";

export const LetterCirclePIcon = memo(function LetterCircleP(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LetterCirclePBoldIcon,
      duotone: LetterCirclePDuotoneIcon,
      fill: LetterCirclePFillIcon,
      light: LetterCirclePLightIcon,
      regular: LetterCirclePRegularIcon,
      thin: LetterCirclePThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
