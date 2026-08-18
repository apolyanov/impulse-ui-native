import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NyTimesLogoBoldIcon } from "../bold/ny-times-logo-bold.icon";
import { NyTimesLogoDuotoneIcon } from "../duotone/ny-times-logo-duotone.icon";
import { NyTimesLogoFillIcon } from "../fill/ny-times-logo-fill.icon";
import { NyTimesLogoLightIcon } from "../light/ny-times-logo-light.icon";
import { NyTimesLogoRegularIcon } from "../regular/ny-times-logo-regular.icon";
import { NyTimesLogoThinIcon } from "../thin/ny-times-logo-thin.icon";

export const NyTimesLogoIcon = memo(function NyTimesLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NyTimesLogoBoldIcon,
      duotone: NyTimesLogoDuotoneIcon,
      fill: NyTimesLogoFillIcon,
      light: NyTimesLogoLightIcon,
      regular: NyTimesLogoRegularIcon,
      thin: NyTimesLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
