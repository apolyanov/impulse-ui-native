import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HouseSimpleBoldIcon } from "../bold/house-simple-bold.icon";
import { HouseSimpleDuotoneIcon } from "../duotone/house-simple-duotone.icon";
import { HouseSimpleFillIcon } from "../fill/house-simple-fill.icon";
import { HouseSimpleLightIcon } from "../light/house-simple-light.icon";
import { HouseSimpleRegularIcon } from "../regular/house-simple-regular.icon";
import { HouseSimpleThinIcon } from "../thin/house-simple-thin.icon";

export const HouseSimpleIcon = memo(function HouseSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HouseSimpleBoldIcon,
      duotone: HouseSimpleDuotoneIcon,
      fill: HouseSimpleFillIcon,
      light: HouseSimpleLightIcon,
      regular: HouseSimpleRegularIcon,
      thin: HouseSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
