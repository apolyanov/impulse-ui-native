import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StairsBoldIcon } from "../bold";
import { StairsDuotoneIcon } from "../duotone";
import { StairsFillIcon } from "../fill";
import { StairsLightIcon } from "../light";
import { StairsRegularIcon } from "../regular";
import { StairsThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StairsIcon = memo(function Stairs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StairsBoldIcon,
      duotone: StairsDuotoneIcon,
      fill: StairsFillIcon,
      light: StairsLightIcon,
      regular: StairsRegularIcon,
      thin: StairsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
