import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HouseSimpleBoldIcon } from "../bold";
import { HouseSimpleDuotoneIcon } from "../duotone";
import { HouseSimpleFillIcon } from "../fill";
import { HouseSimpleLightIcon } from "../light";
import { HouseSimpleRegularIcon } from "../regular";
import { HouseSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HouseSimpleIcon = memo(function HouseSimple(
  props: IconWrapperProps
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
