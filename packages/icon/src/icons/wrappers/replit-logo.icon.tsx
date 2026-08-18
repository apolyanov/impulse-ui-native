import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ReplitLogoBoldIcon } from "../bold/replit-logo-bold.icon";
import { ReplitLogoDuotoneIcon } from "../duotone/replit-logo-duotone.icon";
import { ReplitLogoFillIcon } from "../fill/replit-logo-fill.icon";
import { ReplitLogoLightIcon } from "../light/replit-logo-light.icon";
import { ReplitLogoRegularIcon } from "../regular/replit-logo-regular.icon";
import { ReplitLogoThinIcon } from "../thin/replit-logo-thin.icon";

export const ReplitLogoIcon = memo(function ReplitLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ReplitLogoBoldIcon,
      duotone: ReplitLogoDuotoneIcon,
      fill: ReplitLogoFillIcon,
      light: ReplitLogoLightIcon,
      regular: ReplitLogoRegularIcon,
      thin: ReplitLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
