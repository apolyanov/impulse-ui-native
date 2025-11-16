import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinuxLogoBold } from "../bold";
import { LinuxLogoDuotone } from "../duotone";
import { LinuxLogoFill } from "../fill";
import { LinuxLogoLight } from "../light";
import { LinuxLogoRegular } from "../regular";
import { LinuxLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LinuxLogo = memo(function LinuxLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinuxLogoBold,
      duotone: LinuxLogoDuotone,
      fill: LinuxLogoFill,
      light: LinuxLogoLight,
      regular: LinuxLogoRegular,
      thin: LinuxLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
