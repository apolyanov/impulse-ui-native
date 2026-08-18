import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { XBoldIcon } from "../bold/x-bold.icon";
import { XDuotoneIcon } from "../duotone/x-duotone.icon";
import { XFillIcon } from "../fill/x-fill.icon";
import { XLightIcon } from "../light/x-light.icon";
import { XRegularIcon } from "../regular/x-regular.icon";
import { XThinIcon } from "../thin/x-thin.icon";

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
