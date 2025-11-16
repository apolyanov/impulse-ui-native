import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CodaLogoBold } from "../bold";
import { CodaLogoDuotone } from "../duotone";
import { CodaLogoFill } from "../fill";
import { CodaLogoLight } from "../light";
import { CodaLogoRegular } from "../regular";
import { CodaLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CodaLogo = memo(function CodaLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CodaLogoBold,
      duotone: CodaLogoDuotone,
      fill: CodaLogoFill,
      light: CodaLogoLight,
      regular: CodaLogoRegular,
      thin: CodaLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
