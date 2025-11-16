import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FramerLogoBold } from "../bold";
import { FramerLogoDuotone } from "../duotone";
import { FramerLogoFill } from "../fill";
import { FramerLogoLight } from "../light";
import { FramerLogoRegular } from "../regular";
import { FramerLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FramerLogo = memo(function FramerLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FramerLogoBold,
      duotone: FramerLogoDuotone,
      fill: FramerLogoFill,
      light: FramerLogoLight,
      regular: FramerLogoRegular,
      thin: FramerLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
