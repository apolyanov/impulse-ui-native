import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TidalLogoBoldIcon } from "../bold/tidal-logo-bold.icon";
import { TidalLogoDuotoneIcon } from "../duotone/tidal-logo-duotone.icon";
import { TidalLogoFillIcon } from "../fill/tidal-logo-fill.icon";
import { TidalLogoLightIcon } from "../light/tidal-logo-light.icon";
import { TidalLogoRegularIcon } from "../regular/tidal-logo-regular.icon";
import { TidalLogoThinIcon } from "../thin/tidal-logo-thin.icon";

export const TidalLogoIcon = memo(function TidalLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TidalLogoBoldIcon,
      duotone: TidalLogoDuotoneIcon,
      fill: TidalLogoFillIcon,
      light: TidalLogoLightIcon,
      regular: TidalLogoRegularIcon,
      thin: TidalLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
