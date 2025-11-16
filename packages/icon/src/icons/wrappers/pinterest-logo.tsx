import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PinterestLogoBold } from "../bold";
import { PinterestLogoDuotone } from "../duotone";
import { PinterestLogoFill } from "../fill";
import { PinterestLogoLight } from "../light";
import { PinterestLogoRegular } from "../regular";
import { PinterestLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PinterestLogo = memo(function PinterestLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PinterestLogoBold,
      duotone: PinterestLogoDuotone,
      fill: PinterestLogoFill,
      light: PinterestLogoLight,
      regular: PinterestLogoRegular,
      thin: PinterestLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
