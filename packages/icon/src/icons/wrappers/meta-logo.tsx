import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MetaLogoBold } from "../bold";
import { MetaLogoDuotone } from "../duotone";
import { MetaLogoFill } from "../fill";
import { MetaLogoLight } from "../light";
import { MetaLogoRegular } from "../regular";
import { MetaLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MetaLogo = memo(function MetaLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MetaLogoBold,
      duotone: MetaLogoDuotone,
      fill: MetaLogoFill,
      light: MetaLogoLight,
      regular: MetaLogoRegular,
      thin: MetaLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
