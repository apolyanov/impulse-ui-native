import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TumblrLogoBold } from "../bold";
import { TumblrLogoDuotone } from "../duotone";
import { TumblrLogoFill } from "../fill";
import { TumblrLogoLight } from "../light";
import { TumblrLogoRegular } from "../regular";
import { TumblrLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TumblrLogo = memo(function TumblrLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TumblrLogoBold,
      duotone: TumblrLogoDuotone,
      fill: TumblrLogoFill,
      light: TumblrLogoLight,
      regular: TumblrLogoRegular,
      thin: TumblrLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
