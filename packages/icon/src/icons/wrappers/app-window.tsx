import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AppWindowBold } from "../bold";
import { AppWindowDuotone } from "../duotone";
import { AppWindowFill } from "../fill";
import { AppWindowLight } from "../light";
import { AppWindowRegular } from "../regular";
import { AppWindowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AppWindow = memo(function AppWindow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AppWindowBold,
      duotone: AppWindowDuotone,
      fill: AppWindowFill,
      light: AppWindowLight,
      regular: AppWindowRegular,
      thin: AppWindowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
