import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PixLogoBold } from "../bold";
import { PixLogoDuotone } from "../duotone";
import { PixLogoFill } from "../fill";
import { PixLogoLight } from "../light";
import { PixLogoRegular } from "../regular";
import { PixLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PixLogo = memo(function PixLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PixLogoBold,
      duotone: PixLogoDuotone,
      fill: PixLogoFill,
      light: PixLogoLight,
      regular: PixLogoRegular,
      thin: PixLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
