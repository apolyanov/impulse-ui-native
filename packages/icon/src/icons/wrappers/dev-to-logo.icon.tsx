import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DevToLogoBoldIcon } from "../bold/dev-to-logo-bold.icon";
import { DevToLogoDuotoneIcon } from "../duotone/dev-to-logo-duotone.icon";
import { DevToLogoFillIcon } from "../fill/dev-to-logo-fill.icon";
import { DevToLogoLightIcon } from "../light/dev-to-logo-light.icon";
import { DevToLogoRegularIcon } from "../regular/dev-to-logo-regular.icon";
import { DevToLogoThinIcon } from "../thin/dev-to-logo-thin.icon";

export const DevToLogoIcon = memo(function DevToLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DevToLogoBoldIcon,
      duotone: DevToLogoDuotoneIcon,
      fill: DevToLogoFillIcon,
      light: DevToLogoLightIcon,
      regular: DevToLogoRegularIcon,
      thin: DevToLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
