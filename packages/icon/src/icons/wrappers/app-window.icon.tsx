import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AppWindowBoldIcon } from "../bold/app-window-bold.icon";
import { AppWindowDuotoneIcon } from "../duotone/app-window-duotone.icon";
import { AppWindowFillIcon } from "../fill/app-window-fill.icon";
import { AppWindowLightIcon } from "../light/app-window-light.icon";
import { AppWindowRegularIcon } from "../regular/app-window-regular.icon";
import { AppWindowThinIcon } from "../thin/app-window-thin.icon";

export const AppWindowIcon = memo(function AppWindow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AppWindowBoldIcon,
      duotone: AppWindowDuotoneIcon,
      fill: AppWindowFillIcon,
      light: AppWindowLightIcon,
      regular: AppWindowRegularIcon,
      thin: AppWindowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
