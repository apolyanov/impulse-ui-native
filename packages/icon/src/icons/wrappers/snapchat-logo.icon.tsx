import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SnapchatLogoBoldIcon } from "../bold/snapchat-logo-bold.icon";
import { SnapchatLogoDuotoneIcon } from "../duotone/snapchat-logo-duotone.icon";
import { SnapchatLogoFillIcon } from "../fill/snapchat-logo-fill.icon";
import { SnapchatLogoLightIcon } from "../light/snapchat-logo-light.icon";
import { SnapchatLogoRegularIcon } from "../regular/snapchat-logo-regular.icon";
import { SnapchatLogoThinIcon } from "../thin/snapchat-logo-thin.icon";

export const SnapchatLogoIcon = memo(function SnapchatLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SnapchatLogoBoldIcon,
      duotone: SnapchatLogoDuotoneIcon,
      fill: SnapchatLogoFillIcon,
      light: SnapchatLogoLightIcon,
      regular: SnapchatLogoRegularIcon,
      thin: SnapchatLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
