import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MediumLogoBoldIcon } from "../bold/medium-logo-bold.icon";
import { MediumLogoDuotoneIcon } from "../duotone/medium-logo-duotone.icon";
import { MediumLogoFillIcon } from "../fill/medium-logo-fill.icon";
import { MediumLogoLightIcon } from "../light/medium-logo-light.icon";
import { MediumLogoRegularIcon } from "../regular/medium-logo-regular.icon";
import { MediumLogoThinIcon } from "../thin/medium-logo-thin.icon";

export const MediumLogoIcon = memo(function MediumLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MediumLogoBoldIcon,
      duotone: MediumLogoDuotoneIcon,
      fill: MediumLogoFillIcon,
      light: MediumLogoLightIcon,
      regular: MediumLogoRegularIcon,
      thin: MediumLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
