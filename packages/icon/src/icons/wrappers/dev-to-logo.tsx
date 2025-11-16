import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DevToLogoBold } from "../bold";
import { DevToLogoDuotone } from "../duotone";
import { DevToLogoFill } from "../fill";
import { DevToLogoLight } from "../light";
import { DevToLogoRegular } from "../regular";
import { DevToLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DevToLogo = memo(function DevToLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DevToLogoBold,
      duotone: DevToLogoDuotone,
      fill: DevToLogoFill,
      light: DevToLogoLight,
      regular: DevToLogoRegular,
      thin: DevToLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
