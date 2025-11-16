import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShowerBold } from "../bold";
import { ShowerDuotone } from "../duotone";
import { ShowerFill } from "../fill";
import { ShowerLight } from "../light";
import { ShowerRegular } from "../regular";
import { ShowerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Shower = memo(function Shower(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShowerBold,
      duotone: ShowerDuotone,
      fill: ShowerFill,
      light: ShowerLight,
      regular: ShowerRegular,
      thin: ShowerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
