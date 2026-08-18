import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PixLogoBoldIcon } from "../bold/pix-logo-bold.icon";
import { PixLogoDuotoneIcon } from "../duotone/pix-logo-duotone.icon";
import { PixLogoFillIcon } from "../fill/pix-logo-fill.icon";
import { PixLogoLightIcon } from "../light/pix-logo-light.icon";
import { PixLogoRegularIcon } from "../regular/pix-logo-regular.icon";
import { PixLogoThinIcon } from "../thin/pix-logo-thin.icon";

export const PixLogoIcon = memo(function PixLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PixLogoBoldIcon,
      duotone: PixLogoDuotoneIcon,
      fill: PixLogoFillIcon,
      light: PixLogoLightIcon,
      regular: PixLogoRegularIcon,
      thin: PixLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
