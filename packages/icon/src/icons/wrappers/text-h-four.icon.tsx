import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextHFourBoldIcon } from "../bold";
import { TextHFourDuotoneIcon } from "../duotone";
import { TextHFourFillIcon } from "../fill";
import { TextHFourLightIcon } from "../light";
import { TextHFourRegularIcon } from "../regular";
import { TextHFourThinIcon } from "../thin";

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
