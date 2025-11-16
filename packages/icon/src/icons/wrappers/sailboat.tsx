import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SailboatBold } from "../bold";
import { SailboatDuotone } from "../duotone";
import { SailboatFill } from "../fill";
import { SailboatLight } from "../light";
import { SailboatRegular } from "../regular";
import { SailboatThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Sailboat = memo(function Sailboat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SailboatBold,
      duotone: SailboatDuotone,
      fill: SailboatFill,
      light: SailboatLight,
      regular: SailboatRegular,
      thin: SailboatThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
