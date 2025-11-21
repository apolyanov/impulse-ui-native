import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SidebarSimpleBoldIcon } from "../bold";
import { SidebarSimpleDuotoneIcon } from "../duotone";
import { SidebarSimpleFillIcon } from "../fill";
import { SidebarSimpleLightIcon } from "../light";
import { SidebarSimpleRegularIcon } from "../regular";
import { SidebarSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SidebarSimpleIcon = memo(function SidebarSimple(
  props: IconWrapperProps
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
