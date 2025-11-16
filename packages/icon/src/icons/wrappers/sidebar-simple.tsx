import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SidebarSimpleBold } from "../bold";
import { SidebarSimpleDuotone } from "../duotone";
import { SidebarSimpleFill } from "../fill";
import { SidebarSimpleLight } from "../light";
import { SidebarSimpleRegular } from "../regular";
import { SidebarSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SidebarSimple = memo(function SidebarSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SidebarSimpleBold,
      duotone: SidebarSimpleDuotone,
      fill: SidebarSimpleFill,
      light: SidebarSimpleLight,
      regular: SidebarSimpleRegular,
      thin: SidebarSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
