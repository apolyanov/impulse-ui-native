import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ReplitLogoBold } from "../bold";
import { ReplitLogoDuotone } from "../duotone";
import { ReplitLogoFill } from "../fill";
import { ReplitLogoLight } from "../light";
import { ReplitLogoRegular } from "../regular";
import { ReplitLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ReplitLogo = memo(function ReplitLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ReplitLogoBold,
      duotone: ReplitLogoDuotone,
      fill: ReplitLogoFill,
      light: ReplitLogoLight,
      regular: ReplitLogoRegular,
      thin: ReplitLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
