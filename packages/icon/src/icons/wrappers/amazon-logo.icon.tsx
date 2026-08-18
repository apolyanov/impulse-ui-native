import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AmazonLogoBoldIcon } from "../bold/amazon-logo-bold.icon";
import { AmazonLogoDuotoneIcon } from "../duotone/amazon-logo-duotone.icon";
import { AmazonLogoFillIcon } from "../fill/amazon-logo-fill.icon";
import { AmazonLogoLightIcon } from "../light/amazon-logo-light.icon";
import { AmazonLogoRegularIcon } from "../regular/amazon-logo-regular.icon";
import { AmazonLogoThinIcon } from "../thin/amazon-logo-thin.icon";

export const AmazonLogoIcon = memo(function AmazonLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AmazonLogoBoldIcon,
      duotone: AmazonLogoDuotoneIcon,
      fill: AmazonLogoFillIcon,
      light: AmazonLogoLightIcon,
      regular: AmazonLogoRegularIcon,
      thin: AmazonLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
