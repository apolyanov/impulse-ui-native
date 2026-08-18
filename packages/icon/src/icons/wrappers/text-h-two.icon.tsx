import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextHTwoBoldIcon } from "../bold/text-h-two-bold.icon";
import { TextHTwoDuotoneIcon } from "../duotone/text-h-two-duotone.icon";
import { TextHTwoFillIcon } from "../fill/text-h-two-fill.icon";
import { TextHTwoLightIcon } from "../light/text-h-two-light.icon";
import { TextHTwoRegularIcon } from "../regular/text-h-two-regular.icon";
import { TextHTwoThinIcon } from "../thin/text-h-two-thin.icon";

export const TextHTwoIcon = memo(function TextHTwo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHTwoBoldIcon,
      duotone: TextHTwoDuotoneIcon,
      fill: TextHTwoFillIcon,
      light: TextHTwoLightIcon,
      regular: TextHTwoRegularIcon,
      thin: TextHTwoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
