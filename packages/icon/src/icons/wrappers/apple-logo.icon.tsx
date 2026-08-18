import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AppleLogoBoldIcon } from "../bold/apple-logo-bold.icon";
import { AppleLogoDuotoneIcon } from "../duotone/apple-logo-duotone.icon";
import { AppleLogoFillIcon } from "../fill/apple-logo-fill.icon";
import { AppleLogoLightIcon } from "../light/apple-logo-light.icon";
import { AppleLogoRegularIcon } from "../regular/apple-logo-regular.icon";
import { AppleLogoThinIcon } from "../thin/apple-logo-thin.icon";

export const AppleLogoIcon = memo(function AppleLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AppleLogoBoldIcon,
      duotone: AppleLogoDuotoneIcon,
      fill: AppleLogoFillIcon,
      light: AppleLogoLightIcon,
      regular: AppleLogoRegularIcon,
      thin: AppleLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
