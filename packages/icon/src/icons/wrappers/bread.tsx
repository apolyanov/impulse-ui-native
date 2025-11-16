import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BreadBold } from "../bold";
import { BreadDuotone } from "../duotone";
import { BreadFill } from "../fill";
import { BreadLight } from "../light";
import { BreadRegular } from "../regular";
import { BreadThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bread = memo(function Bread(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BreadBold,
      duotone: BreadDuotone,
      fill: BreadFill,
      light: BreadLight,
      regular: BreadRegular,
      thin: BreadThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
