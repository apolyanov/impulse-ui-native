import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RadicalBold } from "../bold";
import { RadicalDuotone } from "../duotone";
import { RadicalFill } from "../fill";
import { RadicalLight } from "../light";
import { RadicalRegular } from "../regular";
import { RadicalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Radical = memo(function Radical(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RadicalBold,
      duotone: RadicalDuotone,
      fill: RadicalFill,
      light: RadicalLight,
      regular: RadicalRegular,
      thin: RadicalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
