import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { XBold } from "../bold";
import { XDuotone } from "../duotone";
import { XFill } from "../fill";
import { XLight } from "../light";
import { XRegular } from "../regular";
import { XThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const X = memo(function X(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: XBold,
      duotone: XDuotone,
      fill: XFill,
      light: XLight,
      regular: XRegular,
      thin: XThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
