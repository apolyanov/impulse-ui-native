import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PinterestLogoBoldIcon } from "../bold/pinterest-logo-bold.icon";
import { PinterestLogoDuotoneIcon } from "../duotone/pinterest-logo-duotone.icon";
import { PinterestLogoFillIcon } from "../fill/pinterest-logo-fill.icon";
import { PinterestLogoLightIcon } from "../light/pinterest-logo-light.icon";
import { PinterestLogoRegularIcon } from "../regular/pinterest-logo-regular.icon";
import { PinterestLogoThinIcon } from "../thin/pinterest-logo-thin.icon";

export const PinterestLogoIcon = memo(function PinterestLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PinterestLogoBoldIcon,
      duotone: PinterestLogoDuotoneIcon,
      fill: PinterestLogoFillIcon,
      light: PinterestLogoLightIcon,
      regular: PinterestLogoRegularIcon,
      thin: PinterestLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
