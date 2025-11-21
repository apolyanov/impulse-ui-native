import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { InstagramLogoBoldIcon } from "../bold";
import { InstagramLogoDuotoneIcon } from "../duotone";
import { InstagramLogoFillIcon } from "../fill";
import { InstagramLogoLightIcon } from "../light";
import { InstagramLogoRegularIcon } from "../regular";
import { InstagramLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const InstagramLogoIcon = memo(function InstagramLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: InstagramLogoBoldIcon,
      duotone: InstagramLogoDuotoneIcon,
      fill: InstagramLogoFillIcon,
      light: InstagramLogoLightIcon,
      regular: InstagramLogoRegularIcon,
      thin: InstagramLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
