import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextAlignRightBold } from "../bold";
import { TextAlignRightDuotone } from "../duotone";
import { TextAlignRightFill } from "../fill";
import { TextAlignRightLight } from "../light";
import { TextAlignRightRegular } from "../regular";
import { TextAlignRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextAlignRight = memo(function TextAlignRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextAlignRightBold,
      duotone: TextAlignRightDuotone,
      fill: TextAlignRightFill,
      light: TextAlignRightLight,
      regular: TextAlignRightRegular,
      thin: TextAlignRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
