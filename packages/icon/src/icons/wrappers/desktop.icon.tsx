import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DesktopBoldIcon } from "../bold/desktop-bold.icon";
import { DesktopDuotoneIcon } from "../duotone/desktop-duotone.icon";
import { DesktopFillIcon } from "../fill/desktop-fill.icon";
import { DesktopLightIcon } from "../light/desktop-light.icon";
import { DesktopRegularIcon } from "../regular/desktop-regular.icon";
import { DesktopThinIcon } from "../thin/desktop-thin.icon";

export const DesktopIcon = memo(function Desktop(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DesktopBoldIcon,
      duotone: DesktopDuotoneIcon,
      fill: DesktopFillIcon,
      light: DesktopLightIcon,
      regular: DesktopRegularIcon,
      thin: DesktopThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
