import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MediumLogoBoldIcon } from "../bold";
import { MediumLogoDuotoneIcon } from "../duotone";
import { MediumLogoFillIcon } from "../fill";
import { MediumLogoLightIcon } from "../light";
import { MediumLogoRegularIcon } from "../regular";
import { MediumLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MediumLogoIcon = memo(function MediumLogo(
  props: IconWrapperProps
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
