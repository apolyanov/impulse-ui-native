import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { XBoldIcon } from "../bold";
import { XDuotoneIcon } from "../duotone";
import { XFillIcon } from "../fill";
import { XLightIcon } from "../light";
import { XRegularIcon } from "../regular";
import { XThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const XIcon = memo(function X(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: XBoldIcon,
      duotone: XDuotoneIcon,
      fill: XFillIcon,
      light: XLightIcon,
      regular: XRegularIcon,
      thin: XThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
