import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BehanceLogoBold } from "../bold";
import { BehanceLogoDuotone } from "../duotone";
import { BehanceLogoFill } from "../fill";
import { BehanceLogoLight } from "../light";
import { BehanceLogoRegular } from "../regular";
import { BehanceLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BehanceLogo = memo(function BehanceLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BehanceLogoBold,
      duotone: BehanceLogoDuotone,
      fill: BehanceLogoFill,
      light: BehanceLogoLight,
      regular: BehanceLogoRegular,
      thin: BehanceLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
