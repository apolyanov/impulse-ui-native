import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FramerLogoBoldIcon } from "../bold/framer-logo-bold.icon";
import { FramerLogoDuotoneIcon } from "../duotone/framer-logo-duotone.icon";
import { FramerLogoFillIcon } from "../fill/framer-logo-fill.icon";
import { FramerLogoLightIcon } from "../light/framer-logo-light.icon";
import { FramerLogoRegularIcon } from "../regular/framer-logo-regular.icon";
import { FramerLogoThinIcon } from "../thin/framer-logo-thin.icon";

export const FramerLogoIcon = memo(function FramerLogo(
  props: IconWrapperProps,
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
