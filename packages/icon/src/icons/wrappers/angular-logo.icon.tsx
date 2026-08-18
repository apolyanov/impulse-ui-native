import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AngularLogoBoldIcon } from "../bold/angular-logo-bold.icon";
import { AngularLogoDuotoneIcon } from "../duotone/angular-logo-duotone.icon";
import { AngularLogoFillIcon } from "../fill/angular-logo-fill.icon";
import { AngularLogoLightIcon } from "../light/angular-logo-light.icon";
import { AngularLogoRegularIcon } from "../regular/angular-logo-regular.icon";
import { AngularLogoThinIcon } from "../thin/angular-logo-thin.icon";

export const AngularLogoIcon = memo(function AngularLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AngularLogoBoldIcon,
      duotone: AngularLogoDuotoneIcon,
      fill: AngularLogoFillIcon,
      light: AngularLogoLightIcon,
      regular: AngularLogoRegularIcon,
      thin: AngularLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
