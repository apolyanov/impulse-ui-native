import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TiktokLogoBold } from "../bold";
import { TiktokLogoDuotone } from "../duotone";
import { TiktokLogoFill } from "../fill";
import { TiktokLogoLight } from "../light";
import { TiktokLogoRegular } from "../regular";
import { TiktokLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TiktokLogo = memo(function TiktokLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TiktokLogoBold,
      duotone: TiktokLogoDuotone,
      fill: TiktokLogoFill,
      light: TiktokLogoLight,
      regular: TiktokLogoRegular,
      thin: TiktokLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
