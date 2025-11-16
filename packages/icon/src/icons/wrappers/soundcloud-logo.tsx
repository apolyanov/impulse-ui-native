import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SoundcloudLogoBold } from "../bold";
import { SoundcloudLogoDuotone } from "../duotone";
import { SoundcloudLogoFill } from "../fill";
import { SoundcloudLogoLight } from "../light";
import { SoundcloudLogoRegular } from "../regular";
import { SoundcloudLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SoundcloudLogo = memo(function SoundcloudLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SoundcloudLogoBold,
      duotone: SoundcloudLogoDuotone,
      fill: SoundcloudLogoFill,
      light: SoundcloudLogoLight,
      regular: SoundcloudLogoRegular,
      thin: SoundcloudLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
