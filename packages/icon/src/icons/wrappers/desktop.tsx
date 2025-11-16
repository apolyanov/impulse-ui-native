import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DesktopBold } from "../bold";
import { DesktopDuotone } from "../duotone";
import { DesktopFill } from "../fill";
import { DesktopLight } from "../light";
import { DesktopRegular } from "../regular";
import { DesktopThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Desktop = memo(function Desktop(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DesktopBold,
      duotone: DesktopDuotone,
      fill: DesktopFill,
      light: DesktopLight,
      regular: DesktopRegular,
      thin: DesktopThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
