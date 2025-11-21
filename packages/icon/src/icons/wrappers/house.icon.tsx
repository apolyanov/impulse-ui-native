import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HouseBoldIcon } from "../bold";
import { HouseDuotoneIcon } from "../duotone";
import { HouseFillIcon } from "../fill";
import { HouseLightIcon } from "../light";
import { HouseRegularIcon } from "../regular";
import { HouseThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HouseIcon = memo(function House(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HouseBoldIcon,
      duotone: HouseDuotoneIcon,
      fill: HouseFillIcon,
      light: HouseLightIcon,
      regular: HouseRegularIcon,
      thin: HouseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
