import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FigmaLogoBold } from "../bold";
import { FigmaLogoDuotone } from "../duotone";
import { FigmaLogoFill } from "../fill";
import { FigmaLogoLight } from "../light";
import { FigmaLogoRegular } from "../regular";
import { FigmaLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FigmaLogo = memo(function FigmaLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FigmaLogoBold,
      duotone: FigmaLogoDuotone,
      fill: FigmaLogoFill,
      light: FigmaLogoLight,
      regular: FigmaLogoRegular,
      thin: FigmaLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
