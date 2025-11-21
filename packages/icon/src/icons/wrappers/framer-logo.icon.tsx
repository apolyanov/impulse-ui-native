import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FramerLogoBoldIcon } from "../bold";
import { FramerLogoDuotoneIcon } from "../duotone";
import { FramerLogoFillIcon } from "../fill";
import { FramerLogoLightIcon } from "../light";
import { FramerLogoRegularIcon } from "../regular";
import { FramerLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FramerLogoIcon = memo(function FramerLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FramerLogoBoldIcon,
      duotone: FramerLogoDuotoneIcon,
      fill: FramerLogoFillIcon,
      light: FramerLogoLightIcon,
      regular: FramerLogoRegularIcon,
      thin: FramerLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
