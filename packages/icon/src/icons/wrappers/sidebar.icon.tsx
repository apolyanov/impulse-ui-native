import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SidebarBoldIcon } from "../bold/sidebar-bold.icon";
import { SidebarDuotoneIcon } from "../duotone/sidebar-duotone.icon";
import { SidebarFillIcon } from "../fill/sidebar-fill.icon";
import { SidebarLightIcon } from "../light/sidebar-light.icon";
import { SidebarRegularIcon } from "../regular/sidebar-regular.icon";
import { SidebarThinIcon } from "../thin/sidebar-thin.icon";

export const SidebarIcon = memo(function Sidebar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SidebarBoldIcon,
      duotone: SidebarDuotoneIcon,
      fill: SidebarFillIcon,
      light: SidebarLightIcon,
      regular: SidebarRegularIcon,
      thin: SidebarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
