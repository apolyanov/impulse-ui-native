import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AndroidLogoBoldIcon } from "../bold/android-logo-bold.icon";
import { AndroidLogoDuotoneIcon } from "../duotone/android-logo-duotone.icon";
import { AndroidLogoFillIcon } from "../fill/android-logo-fill.icon";
import { AndroidLogoLightIcon } from "../light/android-logo-light.icon";
import { AndroidLogoRegularIcon } from "../regular/android-logo-regular.icon";
import { AndroidLogoThinIcon } from "../thin/android-logo-thin.icon";

export const AndroidLogoIcon = memo(function AndroidLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AndroidLogoBoldIcon,
      duotone: AndroidLogoDuotoneIcon,
      fill: AndroidLogoFillIcon,
      light: AndroidLogoLightIcon,
      regular: AndroidLogoRegularIcon,
      thin: AndroidLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
