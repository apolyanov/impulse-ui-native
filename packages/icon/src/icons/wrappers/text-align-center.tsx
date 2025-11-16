import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextAlignCenterBold } from "../bold";
import { TextAlignCenterDuotone } from "../duotone";
import { TextAlignCenterFill } from "../fill";
import { TextAlignCenterLight } from "../light";
import { TextAlignCenterRegular } from "../regular";
import { TextAlignCenterThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextAlignCenter = memo(function TextAlignCenter(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextAlignCenterBold,
      duotone: TextAlignCenterDuotone,
      fill: TextAlignCenterFill,
      light: TextAlignCenterLight,
      regular: TextAlignCenterRegular,
      thin: TextAlignCenterThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
