import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SoundcloudLogoBoldIcon } from "../bold/soundcloud-logo-bold.icon";
import { SoundcloudLogoDuotoneIcon } from "../duotone/soundcloud-logo-duotone.icon";
import { SoundcloudLogoFillIcon } from "../fill/soundcloud-logo-fill.icon";
import { SoundcloudLogoLightIcon } from "../light/soundcloud-logo-light.icon";
import { SoundcloudLogoRegularIcon } from "../regular/soundcloud-logo-regular.icon";
import { SoundcloudLogoThinIcon } from "../thin/soundcloud-logo-thin.icon";

export const SoundcloudLogoIcon = memo(function SoundcloudLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SoundcloudLogoBoldIcon,
      duotone: SoundcloudLogoDuotoneIcon,
      fill: SoundcloudLogoFillIcon,
      light: SoundcloudLogoLightIcon,
      regular: SoundcloudLogoRegularIcon,
      thin: SoundcloudLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
