import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AngularLogoBoldIcon } from "../bold";
import { AngularLogoDuotoneIcon } from "../duotone";
import { AngularLogoFillIcon } from "../fill";
import { AngularLogoLightIcon } from "../light";
import { AngularLogoRegularIcon } from "../regular";
import { AngularLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AngularLogoIcon = memo(function AngularLogo(
  props: IconWrapperProps
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
