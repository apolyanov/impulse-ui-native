import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WindowsLogoBoldIcon } from "../bold/windows-logo-bold.icon";
import { WindowsLogoDuotoneIcon } from "../duotone/windows-logo-duotone.icon";
import { WindowsLogoFillIcon } from "../fill/windows-logo-fill.icon";
import { WindowsLogoLightIcon } from "../light/windows-logo-light.icon";
import { WindowsLogoRegularIcon } from "../regular/windows-logo-regular.icon";
import { WindowsLogoThinIcon } from "../thin/windows-logo-thin.icon";

export const WindowsLogoIcon = memo(function WindowsLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WindowsLogoBoldIcon,
      duotone: WindowsLogoDuotoneIcon,
      fill: WindowsLogoFillIcon,
      light: WindowsLogoLightIcon,
      regular: WindowsLogoRegularIcon,
      thin: WindowsLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
