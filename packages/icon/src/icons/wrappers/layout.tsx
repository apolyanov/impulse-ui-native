import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LayoutBold } from "../bold";
import { LayoutDuotone } from "../duotone";
import { LayoutFill } from "../fill";
import { LayoutLight } from "../light";
import { LayoutRegular } from "../regular";
import { LayoutThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Layout = memo(function Layout(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LayoutBold,
      duotone: LayoutDuotone,
      fill: LayoutFill,
      light: LayoutLight,
      regular: LayoutRegular,
      thin: LayoutThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
