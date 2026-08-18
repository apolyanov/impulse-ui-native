import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LinkedinLogoBoldIcon } from "../bold/linkedin-logo-bold.icon";
import { LinkedinLogoDuotoneIcon } from "../duotone/linkedin-logo-duotone.icon";
import { LinkedinLogoFillIcon } from "../fill/linkedin-logo-fill.icon";
import { LinkedinLogoLightIcon } from "../light/linkedin-logo-light.icon";
import { LinkedinLogoRegularIcon } from "../regular/linkedin-logo-regular.icon";
import { LinkedinLogoThinIcon } from "../thin/linkedin-logo-thin.icon";

export const LinkedinLogoIcon = memo(function LinkedinLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinkedinLogoBoldIcon,
      duotone: LinkedinLogoDuotoneIcon,
      fill: LinkedinLogoFillIcon,
      light: LinkedinLogoLightIcon,
      regular: LinkedinLogoRegularIcon,
      thin: LinkedinLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
