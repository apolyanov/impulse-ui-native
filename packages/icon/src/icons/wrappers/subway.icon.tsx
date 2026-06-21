import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SubwayBoldIcon } from "../bold";
import { SubwayDuotoneIcon } from "../duotone";
import { SubwayFillIcon } from "../fill";
import { SubwayLightIcon } from "../light";
import { SubwayRegularIcon } from "../regular";
import { SubwayThinIcon } from "../thin";

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
