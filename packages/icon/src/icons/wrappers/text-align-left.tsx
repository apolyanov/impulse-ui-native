import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextAlignLeftBold } from "../bold";
import { TextAlignLeftDuotone } from "../duotone";
import { TextAlignLeftFill } from "../fill";
import { TextAlignLeftLight } from "../light";
import { TextAlignLeftRegular } from "../regular";
import { TextAlignLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextAlignLeft = memo(function TextAlignLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextAlignLeftBold,
      duotone: TextAlignLeftDuotone,
      fill: TextAlignLeftFill,
      light: TextAlignLeftLight,
      regular: TextAlignLeftRegular,
      thin: TextAlignLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
