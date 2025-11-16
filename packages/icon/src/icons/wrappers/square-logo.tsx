import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SquareLogoBold } from "../bold";
import { SquareLogoDuotone } from "../duotone";
import { SquareLogoFill } from "../fill";
import { SquareLogoLight } from "../light";
import { SquareLogoRegular } from "../regular";
import { SquareLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SquareLogo = memo(function SquareLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquareLogoBold,
      duotone: SquareLogoDuotone,
      fill: SquareLogoFill,
      light: SquareLogoLight,
      regular: SquareLogoRegular,
      thin: SquareLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
