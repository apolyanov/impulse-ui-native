import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TwitterLogoBoldIcon } from "../bold/twitter-logo-bold.icon";
import { TwitterLogoDuotoneIcon } from "../duotone/twitter-logo-duotone.icon";
import { TwitterLogoFillIcon } from "../fill/twitter-logo-fill.icon";
import { TwitterLogoLightIcon } from "../light/twitter-logo-light.icon";
import { TwitterLogoRegularIcon } from "../regular/twitter-logo-regular.icon";
import { TwitterLogoThinIcon } from "../thin/twitter-logo-thin.icon";

export const TwitterLogoIcon = memo(function TwitterLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TwitterLogoBoldIcon,
      duotone: TwitterLogoDuotoneIcon,
      fill: TwitterLogoFillIcon,
      light: TwitterLogoLightIcon,
      regular: TwitterLogoRegularIcon,
      thin: TwitterLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
