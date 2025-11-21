import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PinterestLogoBoldIcon } from "../bold";
import { PinterestLogoDuotoneIcon } from "../duotone";
import { PinterestLogoFillIcon } from "../fill";
import { PinterestLogoLightIcon } from "../light";
import { PinterestLogoRegularIcon } from "../regular";
import { PinterestLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PinterestLogoIcon = memo(function PinterestLogo(
  props: IconWrapperProps
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
