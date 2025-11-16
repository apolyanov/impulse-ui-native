import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SidebarBold } from "../bold";
import { SidebarDuotone } from "../duotone";
import { SidebarFill } from "../fill";
import { SidebarLight } from "../light";
import { SidebarRegular } from "../regular";
import { SidebarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Sidebar = memo(function Sidebar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SidebarBold,
      duotone: SidebarDuotone,
      fill: SidebarFill,
      light: SidebarLight,
      regular: SidebarRegular,
      thin: SidebarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
