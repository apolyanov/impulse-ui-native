import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TextAlignRightBoldIcon } from "../bold/text-align-right-bold.icon";
import { TextAlignRightDuotoneIcon } from "../duotone/text-align-right-duotone.icon";
import { TextAlignRightFillIcon } from "../fill/text-align-right-fill.icon";
import { TextAlignRightLightIcon } from "../light/text-align-right-light.icon";
import { TextAlignRightRegularIcon } from "../regular/text-align-right-regular.icon";
import { TextAlignRightThinIcon } from "../thin/text-align-right-thin.icon";

export const TextAlignRightIcon = memo(function TextAlignRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextAlignRightBoldIcon,
      duotone: TextAlignRightDuotoneIcon,
      fill: TextAlignRightFillIcon,
      light: TextAlignRightLightIcon,
      regular: TextAlignRightRegularIcon,
      thin: TextAlignRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
