import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextAlignRightBoldIcon } from "../bold";
import { TextAlignRightDuotoneIcon } from "../duotone";
import { TextAlignRightFillIcon } from "../fill";
import { TextAlignRightLightIcon } from "../light";
import { TextAlignRightRegularIcon } from "../regular";
import { TextAlignRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextAlignRightIcon = memo(function TextAlignRight(
  props: IconWrapperProps
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
