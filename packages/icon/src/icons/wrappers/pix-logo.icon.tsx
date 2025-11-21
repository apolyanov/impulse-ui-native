import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PixLogoBoldIcon } from "../bold";
import { PixLogoDuotoneIcon } from "../duotone";
import { PixLogoFillIcon } from "../fill";
import { PixLogoLightIcon } from "../light";
import { PixLogoRegularIcon } from "../regular";
import { PixLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
