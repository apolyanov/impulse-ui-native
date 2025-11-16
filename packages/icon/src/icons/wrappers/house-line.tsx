import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HouseLineBold } from "../bold";
import { HouseLineDuotone } from "../duotone";
import { HouseLineFill } from "../fill";
import { HouseLineLight } from "../light";
import { HouseLineRegular } from "../regular";
import { HouseLineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HouseLine = memo(function HouseLine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HouseLineBold,
      duotone: HouseLineDuotone,
      fill: HouseLineFill,
      light: HouseLineLight,
      regular: HouseLineRegular,
      thin: HouseLineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
