import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SubwayBoldIcon } from "../bold/subway-bold.icon";
import { SubwayDuotoneIcon } from "../duotone/subway-duotone.icon";
import { SubwayFillIcon } from "../fill/subway-fill.icon";
import { SubwayLightIcon } from "../light/subway-light.icon";
import { SubwayRegularIcon } from "../regular/subway-regular.icon";
import { SubwayThinIcon } from "../thin/subway-thin.icon";

export const SubwayIcon = memo(function Subway(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubwayBoldIcon,
      duotone: SubwayDuotoneIcon,
      fill: SubwayFillIcon,
      light: SubwayLightIcon,
      regular: SubwayRegularIcon,
      thin: SubwayThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
