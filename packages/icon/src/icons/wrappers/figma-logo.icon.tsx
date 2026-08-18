import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FigmaLogoBoldIcon } from "../bold/figma-logo-bold.icon";
import { FigmaLogoDuotoneIcon } from "../duotone/figma-logo-duotone.icon";
import { FigmaLogoFillIcon } from "../fill/figma-logo-fill.icon";
import { FigmaLogoLightIcon } from "../light/figma-logo-light.icon";
import { FigmaLogoRegularIcon } from "../regular/figma-logo-regular.icon";
import { FigmaLogoThinIcon } from "../thin/figma-logo-thin.icon";

export const FigmaLogoIcon = memo(function FigmaLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FigmaLogoBoldIcon,
      duotone: FigmaLogoDuotoneIcon,
      fill: FigmaLogoFillIcon,
      light: FigmaLogoLightIcon,
      regular: FigmaLogoRegularIcon,
      thin: FigmaLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
