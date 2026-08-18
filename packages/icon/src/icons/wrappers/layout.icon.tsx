import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LayoutBoldIcon } from "../bold/layout-bold.icon";
import { LayoutDuotoneIcon } from "../duotone/layout-duotone.icon";
import { LayoutFillIcon } from "../fill/layout-fill.icon";
import { LayoutLightIcon } from "../light/layout-light.icon";
import { LayoutRegularIcon } from "../regular/layout-regular.icon";
import { LayoutThinIcon } from "../thin/layout-thin.icon";

export const LayoutIcon = memo(function Layout(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LayoutBoldIcon,
      duotone: LayoutDuotoneIcon,
      fill: LayoutFillIcon,
      light: LayoutLightIcon,
      regular: LayoutRegularIcon,
      thin: LayoutThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
