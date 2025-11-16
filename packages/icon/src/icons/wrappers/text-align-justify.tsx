import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextAlignJustifyBold } from "../bold";
import { TextAlignJustifyDuotone } from "../duotone";
import { TextAlignJustifyFill } from "../fill";
import { TextAlignJustifyLight } from "../light";
import { TextAlignJustifyRegular } from "../regular";
import { TextAlignJustifyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextAlignJustify = memo(function TextAlignJustify(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextAlignJustifyBold,
      duotone: TextAlignJustifyDuotone,
      fill: TextAlignJustifyFill,
      light: TextAlignJustifyLight,
      regular: TextAlignJustifyRegular,
      thin: TextAlignJustifyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
