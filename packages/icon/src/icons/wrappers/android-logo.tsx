import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AndroidLogoBold } from "../bold";
import { AndroidLogoDuotone } from "../duotone";
import { AndroidLogoFill } from "../fill";
import { AndroidLogoLight } from "../light";
import { AndroidLogoRegular } from "../regular";
import { AndroidLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AndroidLogo = memo(function AndroidLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AndroidLogoBold,
      duotone: AndroidLogoDuotone,
      fill: AndroidLogoFill,
      light: AndroidLogoLight,
      regular: AndroidLogoRegular,
      thin: AndroidLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
