import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TiktokLogoBoldIcon } from "../bold";
import { TiktokLogoDuotoneIcon } from "../duotone";
import { TiktokLogoFillIcon } from "../fill";
import { TiktokLogoLightIcon } from "../light";
import { TiktokLogoRegularIcon } from "../regular";
import { TiktokLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TiktokLogoIcon = memo(function TiktokLogo(
  props: IconWrapperProps
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
