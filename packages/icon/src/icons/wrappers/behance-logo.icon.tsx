import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BehanceLogoBoldIcon } from "../bold/behance-logo-bold.icon";
import { BehanceLogoDuotoneIcon } from "../duotone/behance-logo-duotone.icon";
import { BehanceLogoFillIcon } from "../fill/behance-logo-fill.icon";
import { BehanceLogoLightIcon } from "../light/behance-logo-light.icon";
import { BehanceLogoRegularIcon } from "../regular/behance-logo-regular.icon";
import { BehanceLogoThinIcon } from "../thin/behance-logo-thin.icon";

export const BehanceLogoIcon = memo(function BehanceLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BehanceLogoBoldIcon,
      duotone: BehanceLogoDuotoneIcon,
      fill: BehanceLogoFillIcon,
      light: BehanceLogoLightIcon,
      regular: BehanceLogoRegularIcon,
      thin: BehanceLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
