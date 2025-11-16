import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SubwayBold } from "../bold";
import { SubwayDuotone } from "../duotone";
import { SubwayFill } from "../fill";
import { SubwayLight } from "../light";
import { SubwayRegular } from "../regular";
import { SubwayThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Subway = memo(function Subway(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubwayBold,
      duotone: SubwayDuotone,
      fill: SubwayFill,
      light: SubwayLight,
      regular: SubwayRegular,
      thin: SubwayThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
