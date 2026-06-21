import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TidalLogoBoldIcon } from "../bold";
import { TidalLogoDuotoneIcon } from "../duotone";
import { TidalLogoFillIcon } from "../fill";
import { TidalLogoLightIcon } from "../light";
import { TidalLogoRegularIcon } from "../regular";
import { TidalLogoThinIcon } from "../thin";

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
