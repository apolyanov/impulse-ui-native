import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FigmaLogoBoldIcon } from "../bold";
import { FigmaLogoDuotoneIcon } from "../duotone";
import { FigmaLogoFillIcon } from "../fill";
import { FigmaLogoLightIcon } from "../light";
import { FigmaLogoRegularIcon } from "../regular";
import { FigmaLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
