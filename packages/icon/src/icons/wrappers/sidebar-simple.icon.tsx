import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SidebarSimpleBoldIcon } from "../bold/sidebar-simple-bold.icon";
import { SidebarSimpleDuotoneIcon } from "../duotone/sidebar-simple-duotone.icon";
import { SidebarSimpleFillIcon } from "../fill/sidebar-simple-fill.icon";
import { SidebarSimpleLightIcon } from "../light/sidebar-simple-light.icon";
import { SidebarSimpleRegularIcon } from "../regular/sidebar-simple-regular.icon";
import { SidebarSimpleThinIcon } from "../thin/sidebar-simple-thin.icon";

export const SidebarSimpleIcon = memo(function SidebarSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SidebarSimpleBoldIcon,
      duotone: SidebarSimpleDuotoneIcon,
      fill: SidebarSimpleFillIcon,
      light: SidebarSimpleLightIcon,
      regular: SidebarSimpleRegularIcon,
      thin: SidebarSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
