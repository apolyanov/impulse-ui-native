import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextHTwoBold } from "../bold";
import { TextHTwoDuotone } from "../duotone";
import { TextHTwoFill } from "../fill";
import { TextHTwoLight } from "../light";
import { TextHTwoRegular } from "../regular";
import { TextHTwoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextHTwo = memo(function TextHTwo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHTwoBold,
      duotone: TextHTwoDuotone,
      fill: TextHTwoFill,
      light: TextHTwoLight,
      regular: TextHTwoRegular,
      thin: TextHTwoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
