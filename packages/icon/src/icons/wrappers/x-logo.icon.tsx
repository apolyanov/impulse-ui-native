import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { XLogoBoldIcon } from "../bold";
import { XLogoDuotoneIcon } from "../duotone";
import { XLogoFillIcon } from "../fill";
import { XLogoLightIcon } from "../light";
import { XLogoRegularIcon } from "../regular";
import { XLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const XLogoIcon = memo(function XLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: XLogoBoldIcon,
      duotone: XLogoDuotoneIcon,
      fill: XLogoFillIcon,
      light: XLogoLightIcon,
      regular: XLogoRegularIcon,
      thin: XLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
