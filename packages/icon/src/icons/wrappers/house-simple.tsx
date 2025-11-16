import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HouseSimpleBold } from "../bold";
import { HouseSimpleDuotone } from "../duotone";
import { HouseSimpleFill } from "../fill";
import { HouseSimpleLight } from "../light";
import { HouseSimpleRegular } from "../regular";
import { HouseSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HouseSimple = memo(function HouseSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HouseSimpleBold,
      duotone: HouseSimpleDuotone,
      fill: HouseSimpleFill,
      light: HouseSimpleLight,
      regular: HouseSimpleRegular,
      thin: HouseSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
