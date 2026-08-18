import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextHBoldIcon } from "../bold/text-h-bold.icon";
import { TextHDuotoneIcon } from "../duotone/text-h-duotone.icon";
import { TextHFillIcon } from "../fill/text-h-fill.icon";
import { TextHLightIcon } from "../light/text-h-light.icon";
import { TextHRegularIcon } from "../regular/text-h-regular.icon";
import { TextHThinIcon } from "../thin/text-h-thin.icon";

export const TextHIcon = memo(function TextH(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHBoldIcon,
      duotone: TextHDuotoneIcon,
      fill: TextHFillIcon,
      light: TextHLightIcon,
      regular: TextHRegularIcon,
      thin: TextHThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
