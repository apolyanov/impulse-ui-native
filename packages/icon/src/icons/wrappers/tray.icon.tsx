import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrayBoldIcon } from "../bold/tray-bold.icon";
import { TrayDuotoneIcon } from "../duotone/tray-duotone.icon";
import { TrayFillIcon } from "../fill/tray-fill.icon";
import { TrayLightIcon } from "../light/tray-light.icon";
import { TrayRegularIcon } from "../regular/tray-regular.icon";
import { TrayThinIcon } from "../thin/tray-thin.icon";

export const TrayIcon = memo(function Tray(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrayBoldIcon,
      duotone: TrayDuotoneIcon,
      fill: TrayFillIcon,
      light: TrayLightIcon,
      regular: TrayRegularIcon,
      thin: TrayThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
