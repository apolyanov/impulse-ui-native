import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DribbbleLogoBoldIcon } from "../bold/dribbble-logo-bold.icon";
import { DribbbleLogoDuotoneIcon } from "../duotone/dribbble-logo-duotone.icon";
import { DribbbleLogoFillIcon } from "../fill/dribbble-logo-fill.icon";
import { DribbbleLogoLightIcon } from "../light/dribbble-logo-light.icon";
import { DribbbleLogoRegularIcon } from "../regular/dribbble-logo-regular.icon";
import { DribbbleLogoThinIcon } from "../thin/dribbble-logo-thin.icon";

export const DribbbleLogoIcon = memo(function DribbbleLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DribbbleLogoBoldIcon,
      duotone: DribbbleLogoDuotoneIcon,
      fill: DribbbleLogoFillIcon,
      light: DribbbleLogoLightIcon,
      regular: DribbbleLogoRegularIcon,
      thin: DribbbleLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
