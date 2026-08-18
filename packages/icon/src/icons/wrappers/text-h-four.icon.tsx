import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextHFourBoldIcon } from "../bold/text-h-four-bold.icon";
import { TextHFourDuotoneIcon } from "../duotone/text-h-four-duotone.icon";
import { TextHFourFillIcon } from "../fill/text-h-four-fill.icon";
import { TextHFourLightIcon } from "../light/text-h-four-light.icon";
import { TextHFourRegularIcon } from "../regular/text-h-four-regular.icon";
import { TextHFourThinIcon } from "../thin/text-h-four-thin.icon";

export const TextHFourIcon = memo(function TextHFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHFourBoldIcon,
      duotone: TextHFourDuotoneIcon,
      fill: TextHFourFillIcon,
      light: TextHFourLightIcon,
      regular: TextHFourRegularIcon,
      thin: TextHFourThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
