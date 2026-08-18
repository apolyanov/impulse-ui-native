import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HouseLineBoldIcon } from "../bold/house-line-bold.icon";
import { HouseLineDuotoneIcon } from "../duotone/house-line-duotone.icon";
import { HouseLineFillIcon } from "../fill/house-line-fill.icon";
import { HouseLineLightIcon } from "../light/house-line-light.icon";
import { HouseLineRegularIcon } from "../regular/house-line-regular.icon";
import { HouseLineThinIcon } from "../thin/house-line-thin.icon";

export const HouseLineIcon = memo(function HouseLine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HouseLineBoldIcon,
      duotone: HouseLineDuotoneIcon,
      fill: HouseLineFillIcon,
      light: HouseLineLightIcon,
      regular: HouseLineRegularIcon,
      thin: HouseLineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
