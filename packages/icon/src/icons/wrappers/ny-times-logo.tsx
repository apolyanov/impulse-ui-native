import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NyTimesLogoBold } from "../bold";
import { NyTimesLogoDuotone } from "../duotone";
import { NyTimesLogoFill } from "../fill";
import { NyTimesLogoLight } from "../light";
import { NyTimesLogoRegular } from "../regular";
import { NyTimesLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NyTimesLogo = memo(function NyTimesLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NyTimesLogoBold,
      duotone: NyTimesLogoDuotone,
      fill: NyTimesLogoFill,
      light: NyTimesLogoLight,
      regular: NyTimesLogoRegular,
      thin: NyTimesLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
