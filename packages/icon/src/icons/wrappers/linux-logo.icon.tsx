import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LinuxLogoBoldIcon } from "../bold/linux-logo-bold.icon";
import { LinuxLogoDuotoneIcon } from "../duotone/linux-logo-duotone.icon";
import { LinuxLogoFillIcon } from "../fill/linux-logo-fill.icon";
import { LinuxLogoLightIcon } from "../light/linux-logo-light.icon";
import { LinuxLogoRegularIcon } from "../regular/linux-logo-regular.icon";
import { LinuxLogoThinIcon } from "../thin/linux-logo-thin.icon";

export const LinuxLogoIcon = memo(function LinuxLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinuxLogoBoldIcon,
      duotone: LinuxLogoDuotoneIcon,
      fill: LinuxLogoFillIcon,
      light: LinuxLogoLightIcon,
      regular: LinuxLogoRegularIcon,
      thin: LinuxLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
