import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextHBold } from "../bold";
import { TextHDuotone } from "../duotone";
import { TextHFill } from "../fill";
import { TextHLight } from "../light";
import { TextHRegular } from "../regular";
import { TextHThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextH = memo(function TextH(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHBold,
      duotone: TextHDuotone,
      fill: TextHFill,
      light: TextHLight,
      regular: TextHRegular,
      thin: TextHThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
