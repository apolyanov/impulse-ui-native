import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { XLogoBold } from "../bold";
import { XLogoDuotone } from "../duotone";
import { XLogoFill } from "../fill";
import { XLogoLight } from "../light";
import { XLogoRegular } from "../regular";
import { XLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const XLogo = memo(function XLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: XLogoBold,
      duotone: XLogoDuotone,
      fill: XLogoFill,
      light: XLogoLight,
      regular: XLogoRegular,
      thin: XLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
