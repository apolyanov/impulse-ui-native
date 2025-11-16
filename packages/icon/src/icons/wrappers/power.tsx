import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PowerBold } from "../bold";
import { PowerDuotone } from "../duotone";
import { PowerFill } from "../fill";
import { PowerLight } from "../light";
import { PowerRegular } from "../regular";
import { PowerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Power = memo(function Power(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PowerBold,
      duotone: PowerDuotone,
      fill: PowerFill,
      light: PowerLight,
      regular: PowerRegular,
      thin: PowerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
