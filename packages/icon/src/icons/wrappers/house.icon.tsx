import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HouseBoldIcon } from "../bold/house-bold.icon";
import { HouseDuotoneIcon } from "../duotone/house-duotone.icon";
import { HouseFillIcon } from "../fill/house-fill.icon";
import { HouseLightIcon } from "../light/house-light.icon";
import { HouseRegularIcon } from "../regular/house-regular.icon";
import { HouseThinIcon } from "../thin/house-thin.icon";

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
