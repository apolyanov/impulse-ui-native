import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrayBold } from "../bold";
import { TrayDuotone } from "../duotone";
import { TrayFill } from "../fill";
import { TrayLight } from "../light";
import { TrayRegular } from "../regular";
import { TrayThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Tray = memo(function Tray(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrayBold,
      duotone: TrayDuotone,
      fill: TrayFill,
      light: TrayLight,
      regular: TrayRegular,
      thin: TrayThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
