import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HouseBold } from "../bold";
import { HouseDuotone } from "../duotone";
import { HouseFill } from "../fill";
import { HouseLight } from "../light";
import { HouseRegular } from "../regular";
import { HouseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const House = memo(function House(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HouseBold,
      duotone: HouseDuotone,
      fill: HouseFill,
      light: HouseLight,
      regular: HouseRegular,
      thin: HouseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
