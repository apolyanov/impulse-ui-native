import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WindowsLogoBold } from "../bold";
import { WindowsLogoDuotone } from "../duotone";
import { WindowsLogoFill } from "../fill";
import { WindowsLogoLight } from "../light";
import { WindowsLogoRegular } from "../regular";
import { WindowsLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WindowsLogo = memo(function WindowsLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WindowsLogoBold,
      duotone: WindowsLogoDuotone,
      fill: WindowsLogoFill,
      light: WindowsLogoLight,
      regular: WindowsLogoRegular,
      thin: WindowsLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
