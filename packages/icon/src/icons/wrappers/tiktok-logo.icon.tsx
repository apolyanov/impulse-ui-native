import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TiktokLogoBoldIcon } from "../bold/tiktok-logo-bold.icon";
import { TiktokLogoDuotoneIcon } from "../duotone/tiktok-logo-duotone.icon";
import { TiktokLogoFillIcon } from "../fill/tiktok-logo-fill.icon";
import { TiktokLogoLightIcon } from "../light/tiktok-logo-light.icon";
import { TiktokLogoRegularIcon } from "../regular/tiktok-logo-regular.icon";
import { TiktokLogoThinIcon } from "../thin/tiktok-logo-thin.icon";

export const TiktokLogoIcon = memo(function TiktokLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TiktokLogoBoldIcon,
      duotone: TiktokLogoDuotoneIcon,
      fill: TiktokLogoFillIcon,
      light: TiktokLogoLightIcon,
      regular: TiktokLogoRegularIcon,
      thin: TiktokLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
