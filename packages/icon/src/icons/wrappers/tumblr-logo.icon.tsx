import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TumblrLogoBoldIcon } from "../bold";
import { TumblrLogoDuotoneIcon } from "../duotone";
import { TumblrLogoFillIcon } from "../fill";
import { TumblrLogoLightIcon } from "../light";
import { TumblrLogoRegularIcon } from "../regular";
import { TumblrLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TumblrLogoIcon = memo(function TumblrLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TumblrLogoBoldIcon,
      duotone: TumblrLogoDuotoneIcon,
      fill: TumblrLogoFillIcon,
      light: TumblrLogoLightIcon,
      regular: TumblrLogoRegularIcon,
      thin: TumblrLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
