import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { XLogoBoldIcon } from "../bold/x-logo-bold.icon";
import { XLogoDuotoneIcon } from "../duotone/x-logo-duotone.icon";
import { XLogoFillIcon } from "../fill/x-logo-fill.icon";
import { XLogoLightIcon } from "../light/x-logo-light.icon";
import { XLogoRegularIcon } from "../regular/x-logo-regular.icon";
import { XLogoThinIcon } from "../thin/x-logo-thin.icon";

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
