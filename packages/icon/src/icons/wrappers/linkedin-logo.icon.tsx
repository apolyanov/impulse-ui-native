import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LinkedinLogoBoldIcon } from "../bold";
import { LinkedinLogoDuotoneIcon } from "../duotone";
import { LinkedinLogoFillIcon } from "../fill";
import { LinkedinLogoLightIcon } from "../light";
import { LinkedinLogoRegularIcon } from "../regular";
import { LinkedinLogoThinIcon } from "../thin";

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
