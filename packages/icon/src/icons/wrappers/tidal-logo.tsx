import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TidalLogoBold } from "../bold";
import { TidalLogoDuotone } from "../duotone";
import { TidalLogoFill } from "../fill";
import { TidalLogoLight } from "../light";
import { TidalLogoRegular } from "../regular";
import { TidalLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TidalLogo = memo(function TidalLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TidalLogoBold,
      duotone: TidalLogoDuotone,
      fill: TidalLogoFill,
      light: TidalLogoLight,
      regular: TidalLogoRegular,
      thin: TidalLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
