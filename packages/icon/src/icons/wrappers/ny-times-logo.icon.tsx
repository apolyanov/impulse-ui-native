import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NyTimesLogoBoldIcon } from "../bold";
import { NyTimesLogoDuotoneIcon } from "../duotone";
import { NyTimesLogoFillIcon } from "../fill";
import { NyTimesLogoLightIcon } from "../light";
import { NyTimesLogoRegularIcon } from "../regular";
import { NyTimesLogoThinIcon } from "../thin";

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
