import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { InstagramLogoBold } from "../bold";
import { InstagramLogoDuotone } from "../duotone";
import { InstagramLogoFill } from "../fill";
import { InstagramLogoLight } from "../light";
import { InstagramLogoRegular } from "../regular";
import { InstagramLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const InstagramLogo = memo(function InstagramLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: InstagramLogoBold,
      duotone: InstagramLogoDuotone,
      fill: InstagramLogoFill,
      light: InstagramLogoLight,
      regular: InstagramLogoRegular,
      thin: InstagramLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
